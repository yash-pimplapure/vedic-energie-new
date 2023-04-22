import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import styled from 'styled-components';


const Container = styled.div`
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  display:none;
}
-webkit-scrollbar {
  display: none;
}
`;

function App() {
  return (
    <Container>
      <RouterProvider router={routes} />
    </Container>
  )
}

export default App
