import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Cairo",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Dubai",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Toronto",
    },
  ];
  return (
    <div className="flex items-center flex-wrap gap-4 max-md:w-full justify-around my-6">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            onClick={() => setQuery({ q: city.title })}
            className="text-white text-lg font-medium"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;
