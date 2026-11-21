import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element='' />
      </Routes>
    </>
  );
};

export default App;
