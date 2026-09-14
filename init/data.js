const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

const sampleListing2 = [
  {
  title: "Traditional Punjabi Pind Di Haveli: Mud Hearth Cooking & Kinnow Orchard Walks",
  description: "Stay with the Dhillon family in a generational brick haveli surrounded by sweet-scented kinnow groves. Spend your mornings learning the slow art of baking makki di roti on an open clay chulha and churning fresh white butter. In the evenings, your host leads private tractor trails through the surrounding village fields, followed by open-air baithak sessions sharing local folklore and Partition-era oral histories under the stars. Includes a guided food walk to the oldest lassi and amritsari kulcha tandoors in nearby Hoshiarpur town.",
  price: 2600,
  location: "Village Chabbewal, Hoshiarpur",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/736x/85/35/86/853586db1e94ddaa106edf37dfef98da.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [75.9818, 31.4285] // [longitude, latitude] for Chabbewal, Hoshiarpur
  }
},
{
  title: "Haryanvi Heritage Homestead: Fresh Bilona Ghee & Dairy Barn Experience",
  description: "Immerse yourself in authentic Haryanvi rural life at the Hooda family’s ancestral home in the cattle-rich plains of Beri. Wake up at dawn to learn the traditional care and hand-milking routines of world-famed black Murrah buffaloes, followed by a hands-on session churning warm milk curd into fresh tindi ghee using a traditional wooden madhani. Savor home-ground bajra and missi rotis served with raw white butter, spicy garlic-red chili chutney, and clay pots of chilled lassi. Spend your afternoons lounging on woven charpais under neem trees, listening to local folk raginis, or visiting the historic village stepwell and local akhada.",
  price: 2400,
  location: "Village Beri, Jhajjar",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.japjitravel.com/blog/wp-content/uploads/2024/04/Besan-Masala-Roti-Haryana.webp"
  },
  geometry: {
    type: "Point",
    coordinates: [76.5806, 28.7013] // [longitude, latitude] for Beri, Jhajjar
  }
},
{
  title: "Ladakhi Mud-Brick Heritage Home: Gur-Gur Cha Churning & Barley Harvests",
  description: "Live with the Dorjay family in an authentic sun-dried mud-brick home facing the snow-capped Stok Kangri range. Gather around the traditional bukhari (wood stove) in the family kitchen to churn salted butter tea (gur-gur cha) in a tall wooden chandong and roast native barley into nutty tsampa flour. Your hosts guide you on peaceful morning walks through stone chortens and willow-lined irrigation canals to the 14th-century Stok Gompa, followed by an evening sharing warm, hand-rolled vegetable skyu stew and apricot jams beneath an unpolluted Milky Way sky.",
  price: 3200,
  location: "Village Stok, Leh",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/1200x/e3/4b/c3/e34bc3b20a753aa799265740fc893215.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [77.5533, 34.0644] // [longitude, latitude] for Stok, Leh
  }
},
// 1. MEWAR REGION (Udaipur Hills & Traditional Mewari Hospitality)
{
  title: "Mewari(Rajasthan) Stone Haveli: Clay Chulha Dal Baati & Aravalli Stepwell Trails",
  description: "Stay with the Jhala family in a restored stone-courtyard haveli nestled in the rugged Aravalli foothills outside Udaipur. Learn the heirloom art of making traditional Mewari Dal Baati Churma, slow-roasting baatis over dried cow-dung embers and preparing hand-pounded gatta curries. Your host accompanies you through ancient stepped stepwells (baoris), local community pottery workshops, and hidden sunset viewpoints overlooking rural farm valleys, ending with folk sitar music in the open central courtyard.",
  price: 2900,
  location: "Village Delwara, Udaipur",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/736x/c4/05/a4/c405a490a3ab9b19df8513d26cfe7967.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [73.7463, 24.7752] // [longitude, latitude] for Delwara, Udaipur
  }
},

// 2. MARWAR REGION (Thar Desert Living & Heritage Marwari Kitchen)
{
  title: "Marwari(Rajasthan) Desert Dhani: Bajra Roti Making, Ker Sangri & Starlit Sand Dunes",
  description: "Experience the heart of the Marwar desert plains staying in authentic mud-plastered thar cottages (jhopas) hosted by the Rathore family. Participate in traditional desert kitchen prep: rolling rustic bajra rotlas on clay griddles, preparing authentic sun-dried ker sangri, and tasting spicy kachri chutney with fresh camel milk tea. Spend your twilight hours listening to soulful Kamaycha and Sarangi musicians by the campfire, followed by early morning walks to witness migratory Kurjan (demoiselle crane) flocks at local desert wetlands.",
  price: 2700,
  location: "Village Khichan, Phalodi",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/736x/e9/9e/71/e99e7189ebe91cec83656e583ed4464c.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [72.4150, 27.1350] // [longitude, latitude] for Khichan, Marwar
  }
},
{
  title: "Himachali Kath-Kuni Homestead: Walnut Siddu Making & Sainj Pine Trails",
  description: "Reside with the Thakur family in an ancestral, earthquake-resistant Kath-Kuni home crafted entirely from alternating interlocked layers of deodar cedar and local stone without any mortar. Learn the age-old art of rolling and steaming walnut-and-poppy-seed stuffed Siddu, eaten dipped in bowls of hot desi ghee. Your host guides you along forgotten pine-forest shepherd trails to sacred meadow clearings and ancient pagoda-style wood temples, concluding with stories of village devtas (local deities) gathered around a blazing tandoori heater.",
  price: 2750,
  location: "Village Shangarh, Sainj Valley",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZU2GzJRy2qTzL2DiYq04skNoCeKqb3IdPb4U8fGNGsx7SOnt9GLzDozl&s=10"
  },
  geometry: {
    type: "Point",
    coordinates: [77.3482, 31.7915] // [longitude, latitude] for Shangarh, Sainj
  }
},
{
  title: "Gaddi Himachali Shepherd Abode: Kangri Dham Feasts & Dhauladhar Slate Trails",
  description: "Stay with a native Gaddi pastoralist family in a traditional mud-plastered slate-roof house looking directly onto snow-sheathed Dhauladhar cliffs. Learn about generational sheep-grazing lore and spinning raw wool on traditional charkhas, then join in preparing the slow-simmered Kangri Dham: madra (chickpeas cooked in spiced curd), mah ki dal, and sweet-sour amchur khatta. Your mornings feature walks through hidden tea terraces and slate-carver hamlets led by your host, accompanied by soothing mountain flute melodies in the courtyard.",
  price: 2400,
  location: "Village Kareri, Kangra",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/shepherd-trail-gaddi-trek1.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [76.2891, 32.2612] // [longitude, latitude] for Kareri, Kangra
  }
},
{
  title: "Kinnauri(Himachal) Timber Chalet: Apple Orchard Harvests & Chuli Apricot Oil Pressing",
  description: "Experience the unique Indo-Tibetan heritage of Sangla Valley inside the Negi family’s generational wooden homestay overlooking the Baspa River. Walk through organic apple and apricot groves, participating in ancestral chuli (wild apricot) kernel sorting and cold stone-pressing to extract pure mountain oil. Feast on traditional buckwheat childa pancakes, local rajma, and salted butter tea, followed by an afternoon walking through centuries-old Kamru fort alleyways guided by local elders.",
  price: 3100,
  location: "Village Sangla, Kinnaur",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.honeymoonpackagesmanali.in/wp-content/uploads/2024/09/Untitled-design-2024-09-20T165529.846.png"
  },
  geometry: {
    type: "Point",
    coordinates: [78.2584, 31.4241] // [longitude, latitude] for Sangla, Kinnaur
  }
},
{
  title: "Kashmiri Pahar Wooden Abode: Samovar Noon Chai & Willow Kangri Weaving",
  description: "Stay with the Mir family in a traditional Kashmiri brick-and-timber home set amidst sloping walnut and apple groves. Gather around a crackling bukhari in the central dhaan room to sip freshly brewed pink Noon Chai and aromatic saffron Kehwa from a hand-etched copper samovar, accompanied by crisp local girda bread from the neighborhood kandur baker. Your host guides you through nearby willow-craft hamlets to watch artisans weave protective wicker baskets for Kangri firepots, followed by a seasonal dinner of slow-simmered Dum Aloo and haakh greens seasoned with heirloom mustard oil.",
  price: 3300,
  location: "Village Kanidajan, Budgam",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://blogmedia.oaklores.com/uploads/2024/12/1200-675-23167367-thumbnail-16x9-kangri-aspera.webp"
  },
  geometry: {
    type: "Point",
    coordinates: [74.7214, 33.8642] // [longitude, latitude] for Kanidajan, Budgam
  }
},
{
  title: "Uttrakhand's Kumaoni Heritage Kholi Home: Bhatt Ki Churkani & Oak Canopy Walks",
  description: "Reside with the Joshi family in an authentic mud-and-slate stone home featuring century-old intricately hand-carved deodar timber doorways (Kholis). Participate in making rustic Kumaoni dishes: slow-roasting iron-pot Bhatt ki Churkani (black soybean curry) tempered with wild jakhiya seeds, alongside crisp mandua (finger millet) rotis and spicy hemp-seed (bhaang) chutney. Spend quiet mornings following your host through moss-draped oak and rhododendron trails with sweeping views of the Trishul and Nanda Devi peaks, winding down with local pahadi folk tales by the fire.",
  price: 2650,
  location: "Village Sarmoli, Munsiari",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.renuka-voyagerforlife.com/wp-content/uploads/2019/01/IMG-Villages-of-India.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [80.2372, 30.0668] // [longitude, latitude] for Munsiari, Kumaon
  }
}, 
{
  title: "Uttrakhand's Garhwali Mountain Stone Cottage: Iron-Pot Kafuli & Barnyard Millet Harvests",
  description: "Experience genuine mountain warmth with the Rawat family in a two-tier terraced stone cottage overlooking the Alaknanda river valley. Learn traditional Garhwali grain processing using the ancestral stone pestle (okhal) to hull wild barnyard millet (jhangora), followed by preparing iron-kadai Kafuli—a thick, nourishing puree of tender spinach, fenugreek, and ground rice. Your host accompanies you along ancient pilgrim stone paths to hidden natural cold-water springs (dharas) and high-meadow pasture huts, capped with warm bowls of sweetened jhangora kheer.",
  price: 2500,
  location: "Village Urgam, Chamoli",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/736x/dd/8d/b8/dd8db8f0db0b8baed54c3663d44533c4.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [79.4678, 30.5636] // [longitude, latitude] for Urgam Valley, Chamoli
  }
},
// 1. MEGHALAYA (Khasi Hills: Matrilineal Living & Living Root Bridges)
{
  title: "Meghalya's Khasi Indigenous Bamboo Cottage: Tungrymbai Cooking & Living Root Bridge Trails",
  description: "Immerse yourself in Khasi culture at the Lyngdoh family’s split-bamboo and timber cottage in the lush rain-swept hills of Sohra. Learn about the indigenous matrilineal heritage around the hearth, sampling traditional fermented soybean mash (tungrymbai), steamed rice cakes (pukhlein), and tender bamboo shoot curries. Your host guides you down stone cliff stairs through dense tropical canopies to secluded double-decker living root bridges crafted by ancestral bio-engineering, followed by a visit to crystal-clear natural limestone plunge pools.",
  price: 2900,
  location: "Village Tyrna, Cherrapunji (Sohra)",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.trawell.in/admin/images/upload/648495623Shillong_Khasi_Heritage_Village_Main.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [91.6762, 25.2444] // [longitude, latitude] for Tyrna, Sohra
  }
},

// 2. ASSAM (Majuli River Island: Mising Bamboo Chang Ghar & Mask-Making Satras)
{
  title: "Assamese Mising Bamboo Chang Ghar: Apong Rice Brew & Vaishnavite Mask-Making",
  description: "Stay in a traditional stilted bamboo house (Chang Ghar) hosted by a native Mising family on the world’s largest river island. Wake up over the water to freshly brewed wild herbal black tea, watch traditional loom weaving of geometric Mirjim tapestries, and learn the fermentation technique of Apong (sweet rice brew). Your afternoons are spent bicycling with your host through serene wetlands to the centuries-old Natun Samaguri Satra to witness master artisans sculpting traditional mythological bamboo-and-clay theater masks.",
  price: 2300,
  location: "Village Kamalabari, Majuli",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQKHL-yMUmkcX0chy9EgBkG-wwY_wPKlYFCb2sxmnJ0ednlokkjjTM6FQ&s=10"
  },
  geometry: {
    type: "Point",
    coordinates: [94.1667, 26.9500] // [longitude, latitude] for Majuli, Assam
  }
},

// 3. ARUNACHAL PRADESH (Ziro Valley: Apatani Pine Havens & Paddy-Fish Farming)
{
  title: "Arunachal's Apatani Pine-Timber Abode: Tapyo Herbal Salt Roasting & Wet-Rice Terrace Walks",
  description: "Live with an elder Apatani family inside a handcrafted pine-and-cane home in the mist-veiled Ziro Valley. Discover the community's legendary co-ecological wet-rice and fingerling fish farming systems directly from your host, and observe the heritage process of preparing Tapyo (indigenous indigenous herbal black salt from wild river reeds). Gather around the central open hearth (empe) for roasted bamboo shoot stews and millet brews, accompanied by oral stories preserving ancient nature-worshiping Donyi-Polo beliefs.",
  price: 3100,
  location: "Village Hong, Ziro Valley",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://webguy.in/wp-content/uploads/2017/07/APATANI-LADIES.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [93.8326, 27.5826] // [longitude, latitude] for Ziro, Arunachal Pradesh
  }
},
// 1. KERALA (Alleppey Backwaters & Kuttanad Heritage Farming)
{
  title: "Traditional Kerala Nalukettu: Clay-Pot Fish Curry & Backwater Canoe Drifts",
  description: "Stay with the Kurian family in an authentic 150-year-old timber Nalukettu courtyard home fronting the palm-fringed canals of Kuttanad. Learn to cook Karimeen Pollichathu (pearl spot fish wrapped in smoked banana leaves) and appams with fresh coconut milk pressed right in the kitchen. Your host paddles you along secluded, village-dug waterways to observe below-sea-level paddy farming, followed by sunset toddy-tapping demonstrations and evening tea on a breezy waterfront veranda.",
  price: 3200,
  location: "Village Champakulam, Alappuzha",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://archello.s3.eu-central-1.amazonaws.com/images/2024/07/10/temple-town-nalukettu-private-houses-archello.1720616573.0384.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [76.4023, 9.4034] // [longitude, latitude] for Champakulam, Alleppey
  }
},

// 2. TAMIL NADU (Chettinad Heritage & Hand-Pounded Spice Cooking)
{
  title: "Tamil Chettinad Heritage Mansion: Kalchatti Masala Roasting & Athangudi Tile Craft",
  description: "Reside with the Meyyappan family in a grand, sunlit Chettiar mansion detailed with imported Burmese teak, Italian marble, and Belgian glass mirrors. Discover the precision of authentic Chettinad cuisine by grinding whole peppercorns, star anise, and kalpasi (stone flower) on traditional granite stone ammi kallu, simmering spicy Kozhi roast in seasoned soapstone vessels (kalchatti). Tour nearby artisan workshops with your host to witness the hand-casting of floral Athangudi cement floor tiles and antique brassware.",
  price: 3600,
  location: "Village Kanadukathan, Sivaganga",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://images.forbesindia.com/blog/wp-content/uploads/media/images/2022/Feb/img_177299_chettinadmansions.jpg?im=Resize,width=600,aspect=fit,type=normal"
  },
  geometry: {
    type: "Point",
    coordinates: [78.7844, 10.1758] // [longitude, latitude] for Kanadukathan, Chettinad
  }
},

// 3. KARNATAKA (Coorg / Kodagu Coffee & Pepper Plantation Homestay)
{
  title: "Karnataka's Kodava Plantation Homestead: Akki Roti, Pepper Plucking & Sacred Grove Walks",
  description: "Experience indigenous Kodava hospitality hosted by the Bopanna family inside a sprawling estate home surrounded by arabica coffee bushes and trailing black pepper vines. Learn the delicate method of patting thin rice akki rotis over cast-iron griddles, paired with aromatic bamboo shoot curry (baimbale) and locally sourced wildflower honey. Walk through shaded canopies with your host to discover Devarakadu (ancestral sacred forest groves) and pick fresh green cardamom pods straight from the bush.",
  price: 2950,
  location: "Village Madikeri Rural, Coorg",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://assets.architecturaldigest.in/photos/619b41b275bad38dfdb59dea/master/w_1600%2Cc_limit/Coorg%2520home-1.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [75.7382, 12.4244] // [longitude, latitude] for Madikeri, Coorg
  }
},
{
  title: "Gujrat Kutch's Mud-Plastered Bhunga: Bajra Rotla Cooking & White Rann Artisan Trails",
  description: "Experience authentic pastoral life in a traditional circular mud Bhunga home in the arid plains of the Great Rann. Engineered with thick sun-dried clay and conical thatch to stay naturally cool in harsh desert heat, the interiors are adorned with intricate Lippan mirror artwork. Dine on sweet hand-ground jaggery, thick bajra no rotlo baked on clay embers, and smoked aubergine orho prepared by your Kutchi hosts. Walk through local artisan hamlets to witness copper bell crafting, Ajrakh block printing, and sunset walks across the cracked salt desert beneath starry night skies.",
  price: 3400,
  location: "Hodka Village, Kutch",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://www.livemint.com/lm-img/img/2026/01/30/960x540/istock_gujarat_1769787696006_1769787708520.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [69.6917, 23.6653] // [longitude, latitude] for Hodka, Kutch, Gujarat
  }
},
{
  title: "Konkan Laterite Stone Wada: Ukadiche Modak & Western Ghats Betel Nut Groves",
  description: "Unwind at a restored century-old Konkan Wada built from porous red laterite stone, sheltered under clay roof tiles (kavalu) and surrounded by swaying areca nut and Alphonso mango orchards. Gather in the central courtyard (aangan) for wood-fired Malvani feasts, savoring steamed jaggery-coconut ukadiche modak, tangy kokum-infused solkadhi, and spicy jackfruit curry. Join your native hosts on quiet walks through hidden laterite plateau trails, discover sacred village groves (Devrai), and listen to tales of coastal seafaring forts and Maratha river trade.",
  price: 3800,
  location: "Guhagar, Ratnagiri",
  country: "India",
  image: {
    filename: "listingimage",
    url: "https://i.pinimg.com/1200x/43/6d/56/436d56fa4395dde319363983b6ed3872.jpg"
  },
  geometry: {
    type: "Point",
    coordinates: [73.1979, 17.4839] // [longitude, latitude] for Guhagar, Ratnagiri, Maharashtra
  }
}
];

module.exports = { data: sampleListing2 };