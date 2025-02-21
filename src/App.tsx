import DarkMode from './features/DarkMode';
import HomeScreen from './pages/HomeScreen';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <DarkMode />
    </>
  )
}

export default App;
