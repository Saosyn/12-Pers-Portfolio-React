import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
    </>
  );
}

export default App;
