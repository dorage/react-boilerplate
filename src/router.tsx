import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
