import React from "react";

const PokemonInfo = ({ pokemon }) => {
  return (
    <div>
      <div className="brief-info mb-4 flex items-center gap-5 ms-4">
        <div className=" bg-slate-100 p-5 rounded-sm">
          <img
            src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="Pokemon"
            width={80}
          />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-950">#{pokemon.id}</p>
          <h3 className="uppercase tracking-wider font-bold text-lg text-red-500">
            {pokemon.name}
          </h3>
          <p className=" font-semibold">
            Base exp:{" "}
            <span className=" text-slate-600 font-normal">
              {pokemon.base_experience}
            </span>
          </p>
          <p className=" font-semibold">
            Weight:{" "}
            <span className=" text-slate-600 font-normal">
              {pokemon.weight}
            </span>
          </p>
          <p className=" font-semibold">
            Height:{" "}
            <span className=" text-slate-600 font-normal">
              {pokemon.height}
            </span>
          </p>
        </div>
      </div>

      <div className="abilities bg-slate-100 grid grid-cols-2 gap-5 justify-between px-8 py-2">
        <div className="flex flex-col">
          <div className="mb-2">
            <h3 className="text-red-600 font-semibold">Stats</h3>
            {pokemon.stats.map((data) => (
              <p className="capitalize">
                {data.stat.name}:{" "}
                <span className="text-slate-600">{data.base_stat}</span>
              </p>
            ))}
          </div>
          <div className="mb-2">
            <h3 className="text-red-600 font-semibold">Types</h3>
            {pokemon.types.map((data) => (
              <p className="capitalize">{data.type.name}</p>
            ))}
          </div>
          <div>
            <h3 className="text-red-600 font-semibold">Abilities</h3>
            {pokemon.abilities.map((data) => (
              <p className="capitalize">{data.ability.name}</p>
            ))}
          </div>
        </div>
        <div className="moves">
          <h3 className="text-red-600 font-semibold">Moves</h3>
          <div className="max-h-52 overflow-auto">
            {pokemon.moves.map((data) => (
              <p className="capitalize">{data.move.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
