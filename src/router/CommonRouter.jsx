import { Route, Routes } from "react-router-dom";
import Form from "../pages/Formpage";
import ShowUser from "../pages/showUser";
import EditUser from "../pages/editUser";

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />}></Route>
          <Route path="/users" element={<ShowUser/>}></Route>
          <Route path="/editUser" element={<EditUser/>}></Route>
        
      </Routes>
    </>
  );
}

export default CommonRouter;
