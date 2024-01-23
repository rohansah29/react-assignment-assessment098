import { Stack, HStack, SimpleGrid } from "@chakra-ui/react";
import { Select, Button } from "@chakra-ui/react";
import { reducer } from "../../reducers/books/reducer";
import { initState } from "../../reducers/books/reducer";
import { useEffect, useReducer,useState } from "react";
import axios from "axios";
import BooksCard from "./BooksCard";
import Loading from "./Loading";

function Books() {
  const URL = `/books`;
  const [state, dispatch] = useReducer(reducer, initState);
  const { data, loading, error } = state;
  const [sortOrder,setSortOrder]=useState("");
  const [category,setCategory]=useState("");
  const [criteria,setCriteria]=useState("");


  const fetchAndRender = (URL) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    axios({
      baseURL: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
      url: URL,
      method: "get",
    })
      .then((res) => {
        const data = res?.data;
        console.log(data);
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_DATA_FAILURE" });
      });
  };
  console.log(sortOrder);

  useEffect(() => {
    // let endPointCategory="",endPointCriteria="",endPointSortOrder="";
    let delimiter="?";
    let endPoint=URL;

	if(category){
		endPoint+=delimiter+`category=${category}`;
		delimiter="&";
	}
	if(criteria){
		endPoint+=delimiter+`_sort=${criteria}`;
		delimiter="&";
	}
	if(sortOrder){
		endPoint+=delimiter+`_order=${sortOrder}`;
		delimiter="&";
	}
	
	
    console.log(`final url ${endPoint}`);
    fetchAndRender(endPoint);
  }, [category,criteria,sortOrder]);

  const handleReset=()=>{
    fetchAndRender(URL);
  }

  return (
    <Stack>
      <HStack>
        {/* Import required chakra ui components for filter, sorting and reset functionality  */}
        <Select placeholder="Select a category" data-cy="books_filter" onChange={(e)=>setCategory(e.target.value)}>
          <option value="classic">classic</option>
          <option value="coming_of_age">coming_of_age</option>
          <option value="fantasy">fantasy</option>
          <option value="political_satire">political_satire</option>
          <option value="mystery">mystery</option>
          <option value="epic_poem">epic_poem</option>
        </Select>

        <Select placeholder="Select a sort criteria" data-cy="books_sort" onChange={(e)=>setCriteria(e.target.value)}>
          <option value="publication_date">publication_date</option>
          <option value="category">category</option>
        </Select>

        <Select placeholder="Select a sort order" data-cy="books_sort_order" onChange={(e)=>setSortOrder(e.target.value)}>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </Select>

        <Button colorScheme="blue" data-cy="reset_all" onClick={handleReset}>RESET ALL</Button>
      </HStack>
      {
        /* Show Loading.jsx if loading state is true else SimpleGrid component */
        loading ? (
          <Loading />
        ) : (
          <SimpleGrid columns={3} spacing={10} data-cy="books_container">
            {data.map((el) => (
              <BooksCard {...el} />
            ))}
          </SimpleGrid>
        )
      }
    </Stack>
  );
}

export default Books;
