export interface Game {
  _id: string;
  name: string;
  slug: { current: string };
  images: Array<{
    _key: string;
    url: string;
  }>;
  price: number;
  isFeatured: boolean;
  isTrending: boolean;
  category: { name: string; slug: { current: string } };
  quantity: number;
  description: string;
};