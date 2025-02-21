import DarkMode from './features/DarkMode/DarkMode';
import HomeScreen from './pages/HomeScreen';
import Navbar from './features/Navbar/Navbar';

const App = () => {
  return (
    <div className="bg-white dark:bg-black h-screen p-0 m-0 transition-all duration-500 ease-in-out">
      <DarkMode />
      <Navbar />
      <HomeScreen />
    </div>
  )
}

export default App;
