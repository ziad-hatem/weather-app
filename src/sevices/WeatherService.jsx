import React from "react";
import { DateTime } from "luxon";
export const getWeatherData = (infoType, SearchParams) => {
  const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...SearchParams,
    appid: import.meta.env.VITE_API_KEY,
  });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData("weather", searchParams);

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("weather", {
    lat,
    lon,
    units: searchParams.units,
  });
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
