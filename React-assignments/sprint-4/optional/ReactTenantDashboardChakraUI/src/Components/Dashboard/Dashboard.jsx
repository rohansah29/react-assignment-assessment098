import { Button, Center, Input, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import axios from "axios";

export default function Dashboard() {
	
	const [state,dispatch]=useReducer(reducer,initialState);
	const {data}=state;
	const [sortOrder,setSortOrder] = useState("");
	const [search,setSearch]=useState("");

	let URL=`/houses`;

	const fetchAndRender=(URL)=>{
		dispatch({type:"GET_HOUSE_DETAILS_REQUEST"})
		axios({
			baseURL:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
			url:URL,
			method:"get",
		}).then((res)=>{
			const data=res?.data;
			console.log(data);
			dispatch({type:"GET_HOUSE_DETAILS_SUCCESS",payload:data});
		}).catch(()=>{
			dispatch({type:"GET_HOUSE_DETAILS_FAILURE"})
		})
	}

	useEffect(()=>{
		if(search && setSortOrder){
			URL=URL+`?q=${search}&_sort=rent&_order=${sortOrder}`;
		}else if(search){
			URL=URL+`?q=${search}`;
		}else if(sortOrder){
			URL=URL+`?_sort=rent&_order=${sortOrder}`;
		}
		fetchAndRender(URL);
	},[sortOrder,search])

	const handleDelete=(id)=>{
		axios({
			baseURL:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
			url:`/houses/${id}`,
			method:"delete",
		}).then(()=>{
			fetchAndRender(URL);
		})
	}

	return (
		<div>
			<Stack spacing={5}>
				<div className="sortingButtons">
					<Button className="sortByRentAsc" onClick={()=>setSortOrder("asc")}>Sort by Asc</Button>
					<Button colorScheme={"red"} className="sortByRentDesc" onClick={()=>setSortOrder("desc")}>
						Sort by Desc
					</Button>
				</div>

				<Center>
					<Input
						width="300px"
						focusBorderColor={"lime"}
						className="searchAddress"
						placeholder="Search Data"
						onChange={(e)=>setSearch(e.target.value)}
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
								{data.map((el)=>(
									<Tr className="houseDetails" key={el.id}>
									<Td className="name">{el.name}</Td>
									<Td className="ownersName">{el.ownerName}</Td>
									<Td className="address">{el.address}</Td>
									<Td className="areaCode">{el.areaCode}</Td>
									<Td className="rent">{el.rent}</Td>
									<Td className="isBachelorAllowed">{el.isBachelorAllowed?"Yes":"No"}</Td>
									<Td className="isMarriedAllowed">{el.isMarriedAllowed?"Yes":"No"}</Td>
									<Td className="delete" onClick={()=>handleDelete(el.id)}>Delete</Td>
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
