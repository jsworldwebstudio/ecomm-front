import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import { getGame1 } from "@/libs/apis";

const GameItem = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const { price, quantity, images, name, description } = await getGame1(slug);

  return (
    <GameDetailsClient gamePrice={price} gameQuantity={quantity} gameImages={images}>
      <GameDetailsServer gameName={name} gamePrice={price} gameDescription={description} />
    </GameDetailsClient>
  );
};

export default GameItem;