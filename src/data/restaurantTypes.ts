// types.ts

export interface RestaurantType {
    id: string;
    title: string;
    logo: string;
    posterImages: string[];
    cuisines: string[];
    avgCostPerPerson: number;
    address: string;
    isOpen: boolean;
    timing: string;
    menuImages: string[];
    categories: string[];
    isFeatured: boolean;
    rating:number;
  }
  