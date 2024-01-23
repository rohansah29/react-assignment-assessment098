import fiction from "../fiction.json";
import BookCard from "./BookCard";
export default function Fiction() {
  const FicBooks=fiction.map((el)=>(
    <BookCard img={el.img} title={el.title} year={el.year} price={el.price} author={el.author}/>
  ))
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {FicBooks}
      </div>
    </div>
  );
}
