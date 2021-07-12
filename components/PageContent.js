import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import Sidebar from "./layout/Sidebar";

const PageContent = ({
  gamesList,
  nextPage,
  pageTitle = "New and trending",
}) => {
  const [gameList, setGameList] = useState([]);
  const [next, setNext] = useState(nextPage);
  useEffect(() => {
    setGameList(gamesList);
  }, [gamesList]);
  const loadMore = async () => {
    try {
      const data = await axios.get(next);
      setGameList([...gameList, ...data.data.results]);
      setNext(data.data.next);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="page-wrapper  justify-center lg:max-w-full lg:justify-start lg:px-10">
      {/* sidebar */}
      <Sidebar />
      {/* gamesList */}
      <div className="flex flex-grow flex-col max-w-[480px] lg:max-w-full mt-4 text-center lg:text-left">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold lg:text-7xl mb-3 capitalize">
            {pageTitle}
          </h1>
          <p>Based on player counts and release date</p>
        </div>
        <div className="flex my-7">
          <button className="flex ml-4 space-x-1 items-center bg-[rgba(244,244,244,0.07)] py-2 px-3 rounded-lg text-sm">
            <div>Order by :</div> <span className="font-medium">Relevence</span>{" "}
            <ChevronDownIcon className="w-4" />
          </button>
        </div>
        <div className="flex flex-col px-4 w-full lg:grid lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4 xl:gap-x-7">
          {gameList.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              bg={game.background_image}
              id={game.id}
              score={game.metacritic}
              platforms={game.parent_platforms}
            />
          ))}
        </div>
        <div className="text-center">
          <button
            className="rounded-md py-2 px-8   my-8 bg-[rgba(244,244,244,.1)] hover:bg-[rgba(244,244,244,.2)] text-[rgba(244,244,244,.7)]"
            onClick={loadMore}
          >
            Load more
          </button>
        </div>
      </div>
    </main>
  );
};

export default PageContent;
