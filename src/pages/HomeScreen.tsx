import MainElements from "./HomeChildren/MainElements/MainElements";
import ChurchVision from "./HomeChildren/ChurchVision/ChurchVision";
import AboutPaster from "./HomeChildren/AboutPastor/AboutPastor";
import AboutChurch from "./HomeChildren/AboutChurch/AboutChurch";

const HomeScreen = () => {
  return (
    <div id="home">
      <MainElements />
      <ChurchVision />
      <AboutPaster />
      <AboutChurch /> 
    </div>
  )
}

export default HomeScreen;