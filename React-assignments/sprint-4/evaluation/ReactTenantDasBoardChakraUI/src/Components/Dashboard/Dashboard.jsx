import {
  Button,
  Center,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useReducer,useEffect } from "react";
import {reducer} from "./reducer"

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};


export default function Dashboard() {
  // TODO: Remove below const and instead import them from chakra UI
  // const Button = () => <div />;
  // const Stack = () => <div />;
  // const Center = () => <div />;
  // const Input = () => <div />;
  // const Table = () => <div />;
  // const TableContainer = () => <div />;
  // const Tbody = () => <div />;
  // const Thead = () => <div />;
  // const Td = () => <div />;
  // const Th = () => <div />;
  // const Tr = () => <div />;

  const [state, dispatch] = useReducer(reducer,initialState);
  const fetchAndRender=()=>{
	dispatch({type:"GET_HOUSE_DETAILS_REQUEST"})
	axios({
		url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
		method:"get",
	}).then((res)=>{
		console.log(res?.data);
		const resData=res?.data;
		dispatch({type:"GET_HOUSE_DETAILS_SUCCESS",payload:resData})
	}).catch(()=>{
		dispatch({type:"GET_HOUSE_DETAILS_FAILURE"})
	})
  }

  useEffect(()=>{
	fetchAndRender();
  },[]);

  return (
    <div>
      <Stack spacing={5}>
        <div className="sortingButtons">
          <Button className="sortByRentAsc">Sort by Asc</Button>
          <Button colorScheme={"red"} className="sortByRentDesc">
            Sort by Desc
          </Button>
        </div>

        <Center>
          <Input
            width="300px"
            focusBorderColor={"lime"}
            className="searchAddress"
            placeholder="Search Data"
          />
        </Center>

        <Center>
          <TableContainer>
            <Table
              variant="striped"
              p={3}
              className="table"
              colorScheme={"cyan"}
            >
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner's Name</Th>
                  <Th>Address</Th>
                  <Th>Area Code</Th>
                  <Th>Rent</Th>
                  <Th>Bachelor Tenants Allowed</Th>
                  <Th>Married Tenants Allowed</Th>
                </Tr>
              </Thead>
              <Tbody>
				{state?.data?.map((item)=>(
					<Tr className="houseDetails" key={item.id}>
					<Td className="name">{item.name}</Td>
					<Td className="ownersName">{item.ownerName}</Td>
					<Td className="address">{item.address}</Td>
					<Td className="areaCode">{item.areaCode}</Td>
					<Td className="rent">{item.rent}</Td>
					<Td className="isBachelorAllowed">{item.isBachelorAllowed}</Td>
					<Td className="isMarriedAllowed">{item.isMarriedAllowed}</Td>
					<Td className="delete">Delete</Td>
				  </Tr>
				))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Stack>
    </div>
  );
}
