import { Outlet } from "react-router";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
