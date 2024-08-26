import "./App.css";
import WeatherWidget from "./Component/weather/WeatherWidget";
import Datafetcher from "./Component/Datafetcher/Datafetcher";
import CounterProvider from "./Component/Context/CounterProvider";
import { DisplayCounter, IncreaseCounter } from "./Component/Context/CounterComponent";

function App() {
  return (
    <div className="App">
      {/* <WeatherWidget city="Hyderabad" temp="28" />
      <Datafetcher />  */}
      <CounterProvider>
        <DisplayCounter />
        <IncreaseCounter />
      </CounterProvider>
    </div>
  );
}

export default App;
