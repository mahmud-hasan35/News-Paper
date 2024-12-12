import { Route, Routes, } from "react-router-dom";
import NewsFeed from "./layout/NewsFeed";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsFeed />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element = {<Login/>}/>
      </Route>
    </Routes>
  );
}