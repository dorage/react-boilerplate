import MainPage from "@/pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
