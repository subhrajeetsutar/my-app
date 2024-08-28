import "./App.css";
import WeatherWidget from "./Component/weather/WeatherWidget";
import Datafetcher from "./Component/Datafetcher/Datafetcher";
import CounterProvider from "./Component/Context/CounterProvider";
import { DisplayCounter, IncreaseCounter } from "./Component/Context/CounterComponent";
import EventHandling from "./Component/EventHandling";
import ControlledComponent from "./Component/ControlledComponent";
import useFetch from "./Component/API/UseFecth";
import Counter from "./Counter";

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
      <Counter/>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
