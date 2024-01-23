import { VStack, StackDivider } from "@chakra-ui/react";


function BooksCard({author,category,isbn,publication_date,title}) {
  return <VStack
  spacing={4}
  align="stretch"
  data-cy="book_card">
  <h2 className="chakra-heading">Title - {title}</h2>
  <h3 className="chakra-heading">Author - {author}</h3>
  <h5 className="chakra-heading">Category - {category}</h5>
  <h6 className="chakra-heading">Publication Date - {publication_date}</h6>
  <p className="chakra-text">#isbn - {isbn}</p>
  </VStack>;
}

export default BooksCard;
