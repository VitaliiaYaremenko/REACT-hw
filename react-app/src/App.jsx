import {Container} from "react-bootstrap";
import PostCatalog from "./PostCatalog";

function App() {

  return (
      <>
          <Container>
              <h1 className='mb-5 text-center'>PostCatalog</h1>
              <PostCatalog/>
          </Container>
      </>
  )
}

export default App
