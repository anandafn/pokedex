import React, { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";
import Modal from "./Modal";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [allData, setAllData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 18;

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  const getPokeData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      // Check if there are no more results
      if (data.results.length === 0) {
        setHasMore(false);
        return;
      }

      // Fetch details for each Pokemon
      const pokePromise = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });

      // Update state with the new Pokemon data
      const results = await Promise.all(pokePromise);
      setAllData([...allData, ...results]);

      // Update offset for the next set of Pokemon
      setOffset(offset + limit);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  useEffect(() => {
    getPokeData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center min-h-full px-10 py-8">
      <InfiniteScroll
        dataLength={allData.length}
        next={getPokeData}
        hasMore={hasMore}
        loader={
          <div class="bg-red-500 text-white px-3 py-1 rounded">
            <h2 className="text-center">Loading...</h2>
          </div>
        }
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-3 flex-wrap items-center justify-center py-3">
            {allData.map((data) => (
              <div key={data.id} onClick={() => openModal(data)}>
                <Card name={data.name} id={data.id} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>

      <Modal isVisible={showModal} onClose={closeModal}>
        {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
}

export default Main;
