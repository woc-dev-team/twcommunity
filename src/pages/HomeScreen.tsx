import MainElements from "./HomeChildren/MainElements/MainElements";
import AboutPaster from "./HomeChildren/AboutPastor/AboutPastor";
import AboutChurch from "./HomeChildren/AboutChurch/AboutChurch";
// import ChurchInfo from "./HomeChildren/ChurchInfo/ChurchInfo";

const HomeScreen = () => {
  return (
    <div id="home">
      <MainElements />
      <AboutChurch />
      <AboutPaster />
      {/* <ChurchInfo /> */}
    </div>
  )
}

export default HomeScreen;