import React from "react";
import { formatToLocalTime } from "../sevices/WeatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, sys } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3 ">
        <p className="text-white text-3xl font-medium">{`${name}, ${sys.country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
