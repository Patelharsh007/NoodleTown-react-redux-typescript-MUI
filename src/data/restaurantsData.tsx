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
      "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/08/24072656/CompressJPEG.Online_1_100kb_2364-1024x521.jpg",
      "https://s7d1.scene7.com/is/image/mcdonalds/1PUB_bestburger_trendingnow:publication-column-mobile?resmode=sharp2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dDznRCgwkKQ-SbYoUTNdXKxCEgGZJNPNVqe2jc0eD7BHiquG1sXw3Du14GBWfU5ZNJM&usqp=CAU",
    ],
    cuisines: ["American", "Fast Food", "Burgers"],
    avgCostPerPerson: 250,
    address: "City Light Road, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://scontent.famd1-2.fna.fbcdn.net/v/t1.6435-9/107594265_3290517980986469_6710678867188094634_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jBnWxmUfO0MQ7kNvgHj2jfb&_nc_oc=Adg04oZMbYQAGZnylYRITbMZnZWkzOPk2IKLvH1yJ9AN_G9C_Peh8P19IlLtj629VDrb5arHWNPSqvBC5jKMDLlL&_nc_zt=23&_nc_ht=scontent.famd1-2.fna&_nc_gid=AHEDWF2lDKaYI0aibt3UFxv&oh=00_AYCJ3b7va8Ug-8nTedJjoE6t49uN4vhdZ1mD_xVor8_TKA&oe=67EF78CE",
      "https://res.cloudinary.com/dt3japg4o/image/upload/f_auto,q_auto/v1/Restaurants/McDonalds/menu/abyqscf5rzzmnopjfsv0",
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
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-dominos-logo-icon-download-in-svg-png-gif-file-formats--pizza-beverages-food-and-pack-logos-icons-226179.png?f=webp&w=512",
    posterImages: [
      "https://scontent.famd1-1.fna.fbcdn.net/v/t39.30808-6/299750917_10151694257084957_9122702845177979253_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=jpJvoZ08D9MQ7kNvgGh_fKb&_nc_oc=AdiP9WOQGBFvH4_1L3eatObCH1Iv6m9pEaiGQG0K4hXAS6Fdk5DyfJRJypyBDfvnGhru8xmMr4Yb3FPg7wXizyTS&_nc_zt=23&_nc_ht=scontent.famd1-1.fna&_nc_gid=AMkiAerkPdyYaVJEApoe7X2&oh=00_AYC3LMyxV2dlwj8jFaAp76TnC8YEya4duQ_odDsaqj9_-w&oe=67CE07F7",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcYDZkHJ7bu_My2nisipstjB0gR0OhqEb_w&s",
      "https://commande.dominos.fr/header-images/ec5edcc436db8c4c95060a99683dedb0.jpg",
    ],
    cuisines: ["Italian", "Pizza", "Fast Food"],
    avgCostPerPerson: 300,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://th.bing.com/th/id/OIP.Ozf4tbVHcqoOOJZZDkwbewAAAA?rs=1&pid=ImgDetMain",
      "https://www.berkshiremenus.com/images/menus/47a1a4da-457a-78be.jpg",
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/v/k/m42-1493886585590ae67914fd6.jpg?w=700",
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
      "https://b.zmtcdn.com/data/pictures/4/2700044/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://static.vecteezy.com/system/resources/thumbnails/028/647/940/small_2x/fried-chicken-wings-with-kethcup-generative-ai-photo.jpg",
      "https://t4.ftcdn.net/jpg/05/17/27/83/360_F_517278381_npC0cMTTo14wDSQMHtbM5qI1BN0jhEpB.jpg",
    ],
    cuisines: ["American", "Fast Food", "Chicken"],
    avgCostPerPerson: 300,
    address: "Adajan, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://th.bing.com/th/id/OIP._NScablThWpl2MVV8Vlj2gHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/R.40ba7aaea0af0b31bfceb31a276a641e?rik=dbgcDQSprVlNIw&riu=http%3a%2f%2fwww.kfcslu.com%2ftemplate%2ffiles%2fmenu%2fKFC_SLU-menuboard_5.jpg&ehk=7FDUFjj9E6wVi%2fa%2b8IBAmvf2v4vhvksb8nH9ukDbeoA%3d&risl=&pid=ImgRaw&r=0",
      "https://www.kfcdominica.com/template/files/menu/new/Jan%202023/KFC_DOM-appmenu_bucket.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesU5jvNzqOeoO2hIn1IL6IePE3T1DbIWiMQ&s",
      "https://www.archanaskitchen.com//images/archanaskitchen/World_Sandwiches_Burgers_Wraps/Beet_and_Sprout_Vegetable_Sandwich_Recipe-1.jpg",
    ],
    cuisines: ["American", "Healthy Food", "Sandwiches"],
    avgCostPerPerson: 250,
    address: "Piplod, Surat",
    isOpen: true,
    timing: "10:00 AM - 11:00 PM",
    menuImages: [
      "https://b.zmtcdn.com/data/menus/147/147/d6c1b2ee88cb48d1efbeaceae62e1e96.jpg",
      "https://th.bing.com/th/id/OIP.tu4ZNpUffvWj-P4FV1DveAHaK_?rs=1&pid=ImgDetMain",
      "https://b.zmtcdn.com/data/menus/004/35004/defd899a23cbcfffbbc1cd549a0d6302.jpg",
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
      "https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBodXR8ZW58MHx8MHx8fDA%3D",
      "https://b.zmtcdn.com/data/pictures/chains/6/246/0279cb06f7b0151a1da07ea593ba7fec_featured_v2.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/16/9d/35/79/photo5jpg.jpg",
    ],
    cuisines: ["Italian", "Pizza", "Fast Food"],
    avgCostPerPerson: 350,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://b.zmtcdn.com/data/menus/384/90384/059cfc4d0a8ad30b5b1cb8ac318d46a6.jpg",
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/j/f/m46-16056772405fb4b0b87a02d.jpg?tr=tr:n-xlarge",
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
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-91518,resizemode-75,msid-116510855/industry/cons-products/food/starbucks-fully-committed-to-indian-market-says-india-jv-tata-starbucks/starbucks.jpg",
      "https://assets.gqindia.com/photos/5cdc75d38e62990b13f38389/4:3/w_1440,h_1080,c_limit/starbucks-cup-hed-2013.jpg",
      "https://wallpapers.com/images/featured/starbucks-pictures-q3r2gukezl5tqwdu.jpg",
    ],
    cuisines: ["Coffee", "Beverages", "American"],
    avgCostPerPerson: 400,
    address: "DumDum, Surat",
    isOpen: true,
    timing: "7:00 AM - 11:00 PM",
    menuImages: [
      "https://static.eazydiner.com/resized/1920X/restaurant/663004/menu/menu21556866080606.jpg",
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/y/m/m445-15578170215cda66bd77bde.jpg?tr=tr:n-xlarge",
      "https://menuza.org/wp-content/uploads/2024/03/Starbucks-Food-Menu-723x1024.webp",
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
      "https://b.zmtcdn.com/data/pictures/chains/6/303576/47ea6e038d50ecb90c8d3e57e798fb07.jpg?fit=around|750:500&crop=750:500;*,*",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVeTHb92eQxHINlQqVwHxaEoT30njc7Cu7A&s",
    ],
    cuisines: ["Donuts", "Coffee", "Breakfast"],
    avgCostPerPerson: 200,
    address: "Ring Road, Surat",
    isOpen: true,
    timing: "7:00 AM - 11:00 PM",
    menuImages: [
      "https://th.bing.com/th/id/OIP.Iv1uI37URLhdv-PtJ8wtVQAAAA?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.IAqof6LGNwGJGKPk2fqxOwHaHa?rs=1&pid=ImgDetMain",
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
      "https://lh3.googleusercontent.com/aYUUZKXpJHVFlaI5ADj1-0VAMClDR8al-qwk1JHZ3ZZPLJvw2w_f2p-U2m7M2zZNot6o7JDxyyMxmopZ6ADsJtC_kFDBxiQPf0tPsaHI=w1200-rw",
      "https://t3.ftcdn.net/jpg/04/13/22/78/360_F_413227880_HiUXEU9zICBzyQeRexFsHus19E8WNJDU.jpg",
      "https://images.tv9hindi.com/wp-content/uploads/2022/08/Burger-King-Success-Story-how-McDonald-executive-Burger-King-a-successful-brand.jpg",
    ],
    cuisines: ["American", "Fast Food", "Burgers"],
    avgCostPerPerson: 250,
    address: "Athwalines, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://th.bing.com/th/id/OIP.HlASB3-qcsDcAX7bCZqDZAHaNK?pid=ImgDet&w=474&h=842&rs=1",
      "https://th.bing.com/th/id/OIP.axFI20A40grcmM_vT5yyqAHaNK?w=1080&h=1920&rs=1&pid=ImgDetMain",
      "https://www.restaurantmenuprice.com/wp-content/uploads/2022/04/burgerking_menu_042022_02_breakfast_sandwiches_01.jpg",
      "https://th.bing.com/th/id/OIP.AKwRdJE2F2GmfvcmC78ioAHaNK?pid=ImgDet&w=474&h=842&rs=1",
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
      "https://b.zmtcdn.com/data/pictures/4/20356944/509b8f6ec56dc5cbf00d90a5ea3ce05c.jpg?fit=around|750:500&crop=750:500;*,*",
    ],
    cuisines: ["Mexican", "Fast Food", "Tex-Mex"],
    avgCostPerPerson: 200,
    address: "Vesu, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://promolkwebsite.blob.core.windows.net/promotions/promo.lk-promo-5689004182354cd0b4518ecc42550a69.jpg",
      "https://static.eazydiner.com/resized/1920X/restaurant/619792/menu/menu41468580593467.jpg",
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
      "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_150/wyivgk1pvqowswlg1gnl",
      "https://images.deliveryhero.io/image/fd-ph/LH/xtaj-listing.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRfh4-HeufTkhqyIUmw-Zk0yuQycpOPqjlw&s",
    ],
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgCostPerPerson: 300,
    address: "Adajan, Surat",
    isOpen: true,
    timing: "11:00 AM - 11:00 PM",
    menuImages: [
      "https://th.bing.com/th/id/OIP.c9BK9LUF3wXzFwaWaenuHwHaHa?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/R.0a2530ebf412d53b5071fe217d60fff5?rik=o1%2be5T4kVSRh7w&riu=http%3a%2f%2fwww.fallrivermenus.com%2fwp-content%2fuploads%2f2016%2f02%2fpapa-johns-menu-8-scnd-6-11-2016.jpg&ehk=9xPXCa%2f3xbhPe%2bgGXgVQpamOrHxPohFnARUvkxWmxus%3d&risl=&pid=ImgRaw&r=0",
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
