import MainElements from "./HomeChildren/MainElements/MainElements";
import AboutPaster from "./HomeChildren/AboutPastor/AboutPastor";
import AboutChurch from "./HomeChildren/AboutChurch/AboutChurch";

const HomeScreen = () => {
  return (
    <>
      <MainElements />
      <AboutChurch />
      <AboutPaster />
    </>
  )
}

export default HomeScreen;