import { useEffect, useState } from "react";
import Book from "./Book";

const BookList = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [category,setCategory] = useState("");
  const [order,setOrder] = useState("");
  const [sort,setSort] = useState("");
  const [Search,setSearch] = useState("");

  const fetchAndRender=async()=>{
    let url=``;
    if(category && category!="all"){
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?category=${category}`;
    }else if(sort && order){
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?_sort=${sort}&_order=${order}`;
    }else if(Search){
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?q=${Search}`;
    }else{
      url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`;
    }
    setLoading(true);
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    setData(data);
    setLoading(false);
  }
  useEffect(()=>{
    fetchAndRender(sort,order,Search);
  },[category,sort,order,Search]);
  console.log(Search);
  return (
    <>
      <div className="filter-options">
        <label>
          Category:
          <select className="filter-by-category" onChange={(e)=>setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="Classic">Classic</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Romance">Romance</option>
            <option value="Coming of age">Coming of Age</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Political satire">Political Satire</option>
            <option value="Mystery">Mystery</option>
            <option value="Epic poem">Epic Poem</option>
          </select>
        </label>

        <label>
          Sort by:
          <select className="sort-by" onChange={(e)=>{setSort(e.target.value)}}>
            <option value="">Select an option</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
            <option value="publication_date">Publication Date</option>
          </select>
        </label>
        <label>
          Order:
          <select className="order" onChange={(e)=>{setOrder(e.target.value)}}>
            <option value="" >Select an option</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </label>
        <label>
          Search:
          <input onChange={(e)=>{setSearch(e.target.value)}}/>
        </label>
      </div>

      <div className="book-list">
	{loading?<h1 className="loading-text">Loading...</h1>:""}
        {/* render your book components here and initially don't change the data of db.json*/
        data.map((el)=>(
          <Book author={el.author} category={el.category} isbn={el.isbn} publication_date={el.publication_date} title={el.title} id={el.id}/>
        ))
        }
      </div>
    </>
  );
};

export default BookList;
