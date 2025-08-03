import DarkMode from "./features/Button/DarkMode";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./features/Navbar/Navbar";
import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Disciple from "./pages/Disciple";

const App = () => {
  return (
    <div className="bg-white dark:bg-black p-0 m-0 transition-all duration-500 ease-in-out">
      <DarkMode />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/disciple" element={<Disciple />} />
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App;
