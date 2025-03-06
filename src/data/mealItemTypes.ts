export interface MealItemType  {
    id: string;
    restaurantId?: string;
    restaurantName: string;
    category: string;
    image: string;
    title: string;
    shortDescription: string;
    fullDescription: string[];
    price: number;
    isPopular: boolean;
  };