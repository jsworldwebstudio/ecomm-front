// import { getGame } from "@/libs/apis";
import { NextPage } from "next";

interface GameDetailsServerProps {
  gameName: string;
  gamePrice: number;
  gameDescription: string;
}

const GameDetailsServer: NextPage<GameDetailsServerProps> = (props) => {
  const { gameName, gamePrice, gameDescription } = props;

  // const gameDetails = await getGame(slug);

  return (
    <>
      <h2 className={classNames.name}>{gameName}</h2>
      <p className={classNames.price}>$ {gamePrice}</p>
      <h2 className={classNames.description}>{gameDescription}</h2>
    </>
  );
};

export default GameDetailsServer;

const classNames = {
  description: "text-lg text-gray-300 mb-2",
  name: "text-4xl pt-5 text-gray-300 font-bold mb-2",
  price: "text-2xl text-primary font-bold",
};