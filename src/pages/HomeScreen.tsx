import MainElements from "./HomeChildren/MainElements/MainElements";
import ChurchVision from "./HomeChildren/ChurchVision/ChurchVision";
import AboutPaster from "./HomeChildren/AboutPastor/AboutPastor";
import AboutChurch from "./HomeChildren/AboutChurch/AboutChurch";
import ChurchIntro from "./HomeChildren/ChurchIntro/ChurchIntro";
import NewBeliever from "./HomeChildren/NewBeliever/NewBeliver";

const HomeScreen = () => {
  return (
    <div id="home">
      <MainElements />
      <ChurchIntro />
      <NewBeliever />
      <ChurchVision />
      <AboutPaster />
      <AboutChurch /> 
    </div>
  )
}

export default HomeScreen;