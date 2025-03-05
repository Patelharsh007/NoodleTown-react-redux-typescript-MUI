// Type of restaurants
type Restaurant = {
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
};

const restaurants: Restaurant[] = [
  {
    id: "mcdonalds-1",
    title: "McDonald's",
    logo: "/images/Menu/brands/brand6.png",
    posterImages: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      "https://images.unsplash.com/photo-1561758033-7e924f619b47",
      "https://images.unsplash.com/photo-1606674727310-6d55b6960d8f",
    ],
    cuisines: ["American", "Fast Food", "Burgers"],
    avgCostPerPerson: 250,
    address: "City Light Road, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1586816001966-79b736744398",
      "https://images.unsplash.com/photo-1585687544047-cf47d5806f96",
    ],
    categories: [
      "Burgers",
      "Beverages",
      "Desserts",
      "Sides",
      "Breakfast",
      "Happy Meals",
      "McCafe",
    ],
    isFeatured: true,
    rating: 4.2,
  },
  {
    id: "dominos-1",
    title: "Domino's Pizza",
    // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xBChoLAMuhD8axCrLuhmkDaKTO4B4zj3ocdxzvxCQUpIQq-jtkJsYeauZSIoXRZZOBM&usqp=CAU",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-dominos-logo-icon-download-in-svg-png-gif-file-formats--pizza-beverages-food-and-pack-logos-icons-226179.png?f=webp&w=512",
    posterImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    ],
    cuisines: ["Italian", "Pizza", "Fast Food"],
    avgCostPerPerson: 300,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1571066811602-716837d681de",
    ],
    categories: [
      "Pizzas",
      "Sides",
      "Beverages",
      "Desserts",
      "Pasta",
      "Bread",
      "Dips",
    ],
    isFeatured: true,
    rating: 4.3,
  },
  {
    id: "kfc-1",
    title: "KFC",
    logo: "/images/Menu/brands/brand3.png",
    posterImages: [
      "https://images.unsplash.com/photo-1513639778-4c513ba4a9f4",
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
    ],
    cuisines: ["American", "Fast Food", "Chicken"],
    avgCostPerPerson: 300,
    address: "Adajan, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
      "https://images.unsplash.com/photo-1626082927389-6cd097cee6a3",
    ],
    categories: [
      "Chicken",
      "Burgers",
      "Beverages",
      "Sides",
      "Box Meals",
      "Sandwiches",
      "Desserts",
      "Family Meals",
    ],
    isFeatured: true,
    rating: 4.1,
  },
  {
    id: "subway-1",
    title: "Subway",
    logo: "https://logos.logofury.com/logo_src/1acde24021eb936693f8ace058773474.png",
    posterImages: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569",
      "https://images.unsplash.com/photo-1511909525232-61113c912358",
    ],
    cuisines: ["American", "Healthy Food", "Sandwiches"],
    avgCostPerPerson: 250,
    address: "Piplod, Surat",
    isOpen: true,
    timing: "10:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569",
      "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    ],
    categories: [
      "Subs",
      "Salads",
      "Beverages",
      "Cookies",
      "Wraps",
      "Breakfast",
      "Sides",
      "Value Meals",
    ],
    isFeatured: false,
    rating: 4.0,
  },
  {
    id: "pizzahut-1",
    title: "Pizza Hut",
    logo: "https://logos.logofury.com/logo_src/fb97b2ef510a773dfc4bd49a15eab1db.png",
    posterImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    ],
    cuisines: ["Italian", "Pizza", "Fast Food"],
    avgCostPerPerson: 350,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1571066811602-716837d681de",
    ],
    categories: [
      "Pizzas",
      "Pasta",
      "Beverages",
      "Desserts",
      "Sides",
      "Wings",
      "Deals",
    ],
    isFeatured: true,
    rating: 4.4,
  },
  {
    id: "starbucks-1",
    title: "Starbucks",
    logo: "/images/Menu/brands/brand5.png",
    posterImages: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8",
    ],
    cuisines: ["Coffee", "Beverages", "American"],
    avgCostPerPerson: 400,
    address: "DumDum, Surat",
    isOpen: true,
    timing: "7:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
      "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",
    ],
    categories: [
      "Hot Coffee",
      "Cold Coffee",
      "Frappuccinos",
      "Tea",
      "Food",
      "Bakery",
      "Cold Drinks",
      "Merchandise",
    ],
    isFeatured: true,
    rating: 4.5,
  },
  {
    id: "dunkin-1",
    title: "Dunkin' Donuts",
    // logo: "https://images.seeklogo.com/logo-png/28/1/dunkin-donuts-logo-png_seeklogo-286018.png",
    logo: "https://images.seeklogo.com/logo-png/28/1/dunkin-donuts-logo-png_seeklogo-286018.png",
    posterImages: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    ],
    cuisines: ["Donuts", "Coffee", "Breakfast"],
    avgCostPerPerson: 200,
    address: "Ring Road, Surat",
    isOpen: true,
    timing: "7:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    ],
    categories: [
      "Donuts",
      "Coffee",
      "Breakfast Sandwiches",
      "Bagels",
      "Beverages",
      "Box O' Joe",
      "Frozen Drinks",
    ],
    isFeatured: false,
    rating: 4.0,
  },
  {
    id: "burgerking-1",
    title: "Burger King",
    logo: "/images/Menu/brands/brand4.png",
    posterImages: [
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    ],
    cuisines: ["American", "Fast Food", "Burgers"],
    avgCostPerPerson: 250,
    address: "Athwalines, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    ],
    categories: [
      "Flame Grilled Burgers",
      "Chicken & Fish",
      "Sides",
      "Beverages",
      "Desserts",
      "Value Menu",
      "Kids Meals",
    ],
    isFeatured: true,
    rating: 4.2,
  },
  {
    id: "tacobell-1",
    title: "Taco Bell",
    logo: "https://lens-storage.storage.googleapis.com/png/67ec00a7757143c384950f0ce31ed22d",
    posterImages: [
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    ],
    cuisines: ["Mexican", "Fast Food", "Tex-Mex"],
    avgCostPerPerson: 200,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    ],
    categories: [
      "Tacos",
      "Burritos",
      "Quesadillas",
      "Nachos",
      "Combos",
      "Sides",
      "Drinks",
      "Desserts",
    ],
    isFeatured: false,
    rating: 4.0,
  },
  {
    id: "papajohns-1",
    title: "Papa John's",
    logo: "https://scontent.famd1-2.fna.fbcdn.net/v/t39.30808-6/404288179_739837711493147_6882084349773332253_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Dq_d6zhR_v0Q7kNvgG-roho&_nc_oc=Adib0CLq_YPzTIUGv32Q81vaKka83evqnTehj5XSA3fJlDB_9EmA2v5at-gnjvi7FHRAqrva1R5x-NXhNPURZPG2&_nc_zt=23&_nc_ht=scontent.famd1-2.fna&_nc_gid=AUb246aPKZ3_nI1oGp0LL5Q&oh=00_AYD0VlnAPFZTe_PVbpRHSvxPB8EjGKSdoWgjOeXoWFyKYw&oe=67CDFA6C",
    posterImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    ],
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgCostPerPerson: 300,
    address: "Adajan, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1571066811602-716837d681de",
    ],
    categories: [
      "Pizzas",
      "Sides",
      "Drinks",
      "Desserts",
      "Papadias",
      "Wings",
      "Extra Toppings",
    ],
    isFeatured: true,
    rating: 4.3,
  },
];

export default restaurants;
