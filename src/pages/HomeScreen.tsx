import AboutChurch from "./AboutChurch";
import AboutPaster from "./AboutPaster";
import Sidebar from "../features/Navbar/Sidebar";

const HomeScreen = () => {
  return (
    <div>
      <Sidebar />
      <AboutChurch />
      <AboutPaster />
    </div>
  )
}

export default HomeScreen;