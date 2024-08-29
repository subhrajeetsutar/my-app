import "./App.css";
import WeatherWidget from "./Component/weather/WeatherWidget";
import Datafetcher from "./Component/Datafetcher/Datafetcher";
import CounterProvider from "./Component/Context/CounterProvider";
import { DisplayCounter, IncreaseCounter } from "./Component/Context/CounterComponent";
import EventHandling from "./Component/EventHandling";
import ControlledComponent from "./Component/ControlledComponent";
import useFetch from "./Component/API/UseFecth";
import Counter from "./Counter";
import ThemeProvider from "./Component/Theme/ThemeProvider";
import ThemeContext from "./Component/Theme/Context";
import ThemeSwitcher from "./Component/Theme/ThemeSwitch";

function App() {
  const { data, loading, error } = useFetch("https://api.example.com/data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="App">
      {/* <WeatherWidget city="Hyderabad" temp="28" />
      <Datafetcher />  */}
      {/* <CounterProvider>
        <DisplayCounter />
        <IncreaseCounter />
      </CounterProvider>
      <EventHandling/>
      <ControlledComponent/> */}
      {/* <Counter/> */}
      {/* {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))} */}
      <ThemeProvider>
    <div>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />  
    </div>
  </ThemeProvider>
    </div>
  );
}

export default App;
