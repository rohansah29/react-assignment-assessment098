const Book = ({author,category,isbn,publication_date,title,id}) => {
  return (
    <div key={id} className="book">
      {/* Below h2 tag should have title */}
      <h2>{title}</h2>
      {/* the below span tags should have respective text content */}
      <p>
        Author: <span>{author}</span>
      </p>
      <p>
        ISBN:<span>{isbn}</span>{" "}
      </p>
      <p>
        Category: <span>{category}</span>
      </p>
      <p>
        Publication Date:<span>{publication_date}</span>
      </p>
    </div>
  );
};

export default Book;
