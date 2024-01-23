import nonfiction from "../nonfiction.json";
import BookCard from "./BookCard";
export default function NonFiction() {
  const NonFicBooks=nonfiction.map((el)=>(
    <BookCard img={el.img} title={el.title} year={el.year} price={el.price} author={el.author}/>
  ))
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {NonFicBooks}
      </div>
    </div>
  );
}
