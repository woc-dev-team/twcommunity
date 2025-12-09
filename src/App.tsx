import DarkMode from "./features/Button/DarkMode";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./features/Navbar/Navbar";
import Sidebar from "./features/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Disciple from "./pages/Disciple";
import IFrame from "./pages/CommonIFrame";

const App = () => {
  return (
    <div className="bg-white dark:bg-black p-0 m-0 transition-all duration-500 ease-in-out">
      <DarkMode />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/disciple" element={<Disciple />} />
        <Route path="/blog" 
          element={
            <IFrame 
              blogUrl="https://blog.naver.com/thewordchurch__"
              blogUrlM="https://m.blog.naver.com/thewordchurch__?tab=1"
            />}
        />
        {/* <Route path="/work" 
          element={
            <IFrame 
              blogUrl="목사님 사역 블로그 URL"
              blogUrlM="목사님 사역 블로그 모바일 URL"
            />}
        /> */}
      </Routes>
      <Sidebar />
    </div>
  )
}

export default App;
