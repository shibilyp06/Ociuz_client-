import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonRouter from "./router/CommonRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
