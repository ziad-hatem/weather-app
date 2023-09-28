import UimReact from "@iconscout/react-unicons-monochrome/icons/uim-react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempertureAndDetails from "./components/TempertureAndDetails";
import getWeatherData from "./sevices/WeatherService";
import { React, useEffect, useState } from "react";
import getFormattedWeatherData from "./sevices/WeatherService";

function App() {
  const [query, setQuery] = useState({ q: "cairo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather?.main?.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
    <div
      className={`
    mx-auto max-w-screen-md max-md:px-5 mt-4 py-5 px-32 transition bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-700`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempertureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
