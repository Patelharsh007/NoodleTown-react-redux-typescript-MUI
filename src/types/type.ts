//Order-Item used in OrderSlice and OrderSummary
export interface OrderItem {
  id: string;
  user_email: string;
  Date: Date | string;
  address: string;
  items: {
    itemName: string;
    quantity: number;
    price: number;
    itemTotal: number;
  }[];
  subTotal: number;
  discount: number;
  total: number;
  status: string;
}

//Adress used in AddressForm and addressSlice
export interface AddressItem {
  id: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

export interface NewAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

//CartItem for CartSlice
export interface CartItem {
  id: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurantId: string;
  category: string;
  description?: string;
}

//AuthItem for AuthSlice
export interface AuthItem {
  isAuthenticated: boolean;
  email: string;
  fullName?: string;
  password: string;
}

//mealItemType used in mealitem data and
export interface MealItem {
  id: string;
  restaurantId: string;
  restaurantName: string;
  category: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  price: number;
  isPopular: boolean;
}

//restuarantType used in restaurant data
export interface RestaurantItem {
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
  rating: number;
}
