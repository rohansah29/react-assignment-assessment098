import Books from "./components/books/Books";
import {Container} from "@chakra-ui/react";

export default function App() {
  // import the chakra UI components from the chakra UI library , and remove the following.

  // const Container = () => <div />;

  return (
    <Container maxW="container.xl">
      {/* Import Books.jsx component here */}
      <Books/>
    </Container>
  );
}
