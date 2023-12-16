import React from "react";

const Card = ({ name, id, type }) => {
  return (
    <div className=" flex flex-col justify-center items-center py-6 m-1 border border-slate-500 rounded min-w-[160px] text-center shadow-md hover:-translate-y-2 hover:cursor-pointer transition ease-in-out duration-300">
      <img
        src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="Pokemon"
        className="h-[120px] w-[120px] object-contain"
      />
      <h1 className="capitalize mt-2">{name}</h1>
    </div>
  );
};

export default Card;
