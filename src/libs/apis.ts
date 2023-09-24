import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Game } from "@/models/game";

export const getCategories = async(): Promise<Category[]> => {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug { current },
    image,
    subtitle
  }`;

  const categories: Category[] = await sanityClient.fetch({ query });

  return categories;
};


export const getGames = async(): Promise<Game[]> => {
  const query = `*[_type == "game"] {
    _id,
    name,
    slug { current },
    images,
    price,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug { current }
    },
    quantity,
    description,
  }`;

  const games: Game[] = await sanityClient.fetch({ query });

  return games;
};


export const getRecentGames = async(): Promise<Game[]> => {
  const query = `*[_type == "game"] | order(_createdAt desc)[0...4] {
    _id,
    name,
    slug { current },
    images,
    price,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug { current }
    },
    quantity,
    description,
  }`;

  const recentGames: Game[] = await sanityClient.fetch({ query });

  return recentGames;
};

export const getGame = async(slug: string): Promise<Game> => {
  const query = `*[_type == "game" && slug.current == "${slug}"][0] {
    _id,
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug { current }
    },
    slug { current },
    quantity,
    description,
  }`;

  const game: Game = await sanityClient.fetch({ query });

  return game;
};

export const getCategoryGames = async(slug: string): Promise<Game[]> => {
  const query = `*[_type == "game" && category->slug.current == "${slug}"] {
    _id,
    name,
    slug { current },
    images,
    price,
    isFeatured,
    isTrending,
    quantity,
    description,
    category->{
      name,
      subtitle
    }
  }`;

  const games: Game[] = await sanityClient.fetch({ query });

  return games;
};

export const getCategory = async(slug: string): Promise<Category> => {
  const query = `*[_type == "category" && slug.current == "${slug}"][0]`;

  const category: Category = await sanityClient.fetch({ query });

  return category;
};

export const getGame1 = async(slug: string): Promise<Game> => {
  const query = `*[_type == "game" && slug.current == "${slug}"][0]`;

  const game1: Game = await sanityClient.fetch({ query });

  return game1;
};