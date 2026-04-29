// src/data/egyptPackages.ts

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Package {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  durationDays: number;
  price: string;
  priceNote: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  locations: string[];
  includes: string[];
  excludes: string[];
  itinerary: DayItinerary[];
}

export const egyptPackages: Package[] = [
  // ─────────────────────────────────────────────
  // 1. CAI × Sharm El Sheikh — 7 Days
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "cai-x-sharm-7-days",
    title: "CAI × Sharm El Sheikh",
    subtitle: "7 Days / 6 Nights",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    price: "$1,250",
    priceNote: "per person",
    image: "/images/hero-Domestic.webp",
    gallery: [
      "https://castletours.net/wp-content/uploads/2026/02/egypt-4796256_1920-450x300.webp",
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
      "https://images.unsplash.com/photo-1562521279-a9e47a3bde1e?w=800&q=80",
    ],
    description:
      "Experience the magic of Egypt — from the iconic Pyramids of Cairo to the crystal-clear waters and coral reefs of Sharm El Sheikh. This 7-day journey blends ancient history with Red Sea luxury.",
    highlights: [
      "Pyramids of Giza & Great Sphinx",
      "Grand Egyptian Museum (GEM)",
      "St. Catherine Monastery",
      "Ras Mohamed National Park",
      "Red Sea Snorkeling & Diving",
    ],
    locations: ["Cairo", "Sharm El Sheikh"],
    includes: [
      "Domestic Flights Cairo ↔ Sharm",
      "5★ Hotels (6 nights)",
      "Daily Breakfast",
      "Private A/C Transportation",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
      "Optional Activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo International Airport. Meet & greet by our representative, transfer to your 5★ hotel.",
        activities: ["Airport Meet & Greet", "Hotel Check-in", "Welcome Briefing"],
      },
      {
        day: 2,
        title: "Giza Pyramids & Grand Egyptian Museum",
        description: "Full day exploring the Giza Plateau — the Great Pyramids, Great Sphinx, and the Grand Egyptian Museum featuring Tutankhamun's treasures.",
        activities: ["Great Pyramid of Khufu", "Great Sphinx", "Grand Egyptian Museum (GEM)", "Camel Ride (Optional)"],
      },
      {
        day: 3,
        title: "Cairo City Tour",
        description: "Explore Cairo's historical highlights — the Egyptian Museum, Khan El Khalili Bazaar, and the Citadel of Saladin.",
        activities: ["Egyptian Museum", "Khan El Khalili Bazaar", "Citadel of Saladin", "Mohamed Ali Mosque"],
      },
      {
        day: 4,
        title: "Flight to Sharm El Sheikh",
        description: "Morning flight to Sharm El Sheikh. Check in to your Red Sea resort and enjoy the afternoon at leisure.",
        activities: ["Domestic Flight Cairo → Sharm", "Resort Check-in", "Beach Relaxation"],
      },
      {
        day: 5,
        title: "St. Catherine Monastery",
        description: "Early morning excursion to the legendary St. Catherine Monastery at the foot of Mount Sinai.",
        activities: ["St. Catherine Monastery", "Moses Mountain (Optional)", "Bedouin Village Visit"],
      },
      {
        day: 6,
        title: "Ras Mohamed & Red Sea",
        description: "Full day at Ras Mohamed National Park — one of the world's top snorkeling and diving destinations.",
        activities: ["Ras Mohamed National Park", "Snorkeling / Diving", "White Canyon", "Free Beach Time"],
      },
      {
        day: 7,
        title: "Departure",
        description: "Breakfast at the hotel, transfer to Sharm El Sheikh Airport for your departure flight.",
        activities: ["Breakfast", "Hotel Check-out", "Airport Transfer"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Wonder of Egypt — 9 Days
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: "wonder-of-egypt-9-days",
    title: "Classical Egypt & Nile Cruise",
    subtitle: "9 Days",
    duration: "9 Days",
    durationDays: 9,
    price: "$1,850",
    priceNote: "per person",
    image: "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
    gallery: [
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=800&q=80",
    ],
    description:
      "A 9-day adventure through Egypt's greatest wonders — the Pyramids of Cairo, Alexandria by the Mediterranean, a 3-night Nile Cruise from Aswan to Luxor, and relaxation by the Red Sea in Hurghada.",
    highlights: [
      "Giza Pyramids & Sphinx",
      "Alexandria & Bibliotheca Alexandrina",
      "3-Night Nile Cruise Aswan → Luxor",
      "Abu Simbel Temples (Optional)",
      "Valley of the Kings",
      "Hurghada Red Sea Beach",
    ],
    locations: ["Cairo", "Alexandria", "Aswan", "Luxor", "Hurghada"],
    includes: [
      "Domestic Flight Cairo → Aswan",
      "Domestic Flight Luxor → Hurghada",
      "5★ Hotels + 5★ Nile Cruise Ship",
      "Daily Breakfast + Full Board on Cruise",
      "Private A/C Transportation",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Abu Simbel Optional Tour",
      "Personal Expenses",
      "Tips",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo Airport, transfer to your hotel.",
        activities: ["Airport Meet & Greet", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Cairo — Pyramids & GEM",
        description: "Explore Giza Pyramids, the Great Sphinx, and the Grand Egyptian Museum.",
        activities: ["Great Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum"],
      },
      {
        day: 3,
        title: "Cairo → Alexandria",
        description: "Day trip to Alexandria — the Mediterranean jewel of Egypt.",
        activities: ["Bibliotheca Alexandrina", "Qaitbay Citadel", "Catacombs of Kom el Shoqafa", "Mediterranean Seafront"],
      },
      {
        day: 4,
        title: "Flight Cairo → Aswan & Nile Cruise Embarkation",
        description: "Fly to Aswan and board your 5★ Nile Cruise ship.",
        activities: ["Flight Cairo → Aswan", "Philae Temple", "Aswan High Dam", "Nile Cruise Embarkation"],
      },
      {
        day: 5,
        title: "Abu Simbel (Optional) & Kom Ombo",
        description: "Optional early morning excursion to Abu Simbel, then cruise to Kom Ombo Temple.",
        activities: ["Abu Simbel Temples (Optional)", "Kom Ombo Temple", "Nile Sailing"],
      },
      {
        day: 6,
        title: "Edfu Temple & Cruise to Luxor",
        description: "Visit the magnificent Temple of Horus at Edfu, then continue sailing to Luxor.",
        activities: ["Temple of Horus at Edfu", "Nile Cruise Sailing", "Arrive Luxor"],
      },
      {
        day: 7,
        title: "Luxor — Valley of the Kings & West Bank",
        description: "Explore Luxor's legendary West Bank — Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon.",
        activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon", "Nile Cruise Disembarkation"],
      },
      {
        day: 8,
        title: "Luxor → Hurghada",
        description: "Visit Karnak and Luxor Temples in the morning, then transfer to Hurghada for beach relaxation.",
        activities: ["Karnak Temple Complex", "Luxor Temple", "Transfer to Hurghada", "Beach Check-in"],
      },
      {
        day: 9,
        title: "Departure from Hurghada",
        description: "Enjoy a final morning by the Red Sea, then transfer to Hurghada Airport.",
        activities: ["Beach Leisure", "Hotel Check-out", "Airport Transfer"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Historical Egypt — 5 Days
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: "historical-egypt-5-days",
    title: "Historical Egypt",
    subtitle: "5 Days",
    duration: "5 Days",
    durationDays: 5,
    price: "$900",
    priceNote: "per person",
    image: "https://castletours.net/wp-content/uploads/2025/10/4650f80992e4982793d5b89b01f251f2.jpg",
    gallery: [
      "https://castletours.net/wp-content/uploads/2025/10/4650f80992e4982793d5b89b01f251f2.jpg",
      "https://castletours.net/wp-content/uploads/2025/10/e3e4b92772a00bf08922a79dd5a874d7-Giza.jpg",
      "https://images.unsplash.com/photo-1477894880577-8b2f87157e26?w=800&q=80",
    ],
    description:
      "Trace the footsteps of ancient pharaohs in 5 days — Giza Pyramids, the Grand Egyptian Museum, a day trip to Alexandria by the Mediterranean, and the grand temples of Luxor and Karnak.",
    highlights: [
      "Great Pyramids of Giza & Sphinx",
      "Grand Egyptian Museum (GEM)",
      "Alexandria & Bibliotheca Alexandrina",
      "Karnak Temple Complex",
      "Valley of the Kings",
    ],
    locations: ["Cairo", "Alexandria", "Luxor"],
    includes: [
      "Domestic Flights Cairo ↔ Luxor",
      "5★ Hotels (4 nights)",
      "Daily Breakfast",
      "Private A/C Transportation",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo Airport, meet & greet, transfer to 5★ hotel.",
        activities: ["Airport Pick-up", "Hotel Check-in", "Welcome Orientation"],
      },
      {
        day: 2,
        title: "Giza Pyramids & Grand Egyptian Museum",
        description: "Full day at Giza — the Great Pyramids, Great Sphinx, and the brand-new Grand Egyptian Museum.",
        activities: ["Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum", "Saqqara (Optional)"],
      },
      {
        day: 3,
        title: "Day Trip to Alexandria",
        description: "Drive to Alexandria for a day of Mediterranean history and culture.",
        activities: ["Bibliotheca Alexandrina", "Qaitbay Citadel", "Pompey's Pillar", "Alexandria Corniche"],
      },
      {
        day: 4,
        title: "Flight to Luxor — West Bank",
        description: "Fly to Luxor and explore the legendary West Bank necropolis.",
        activities: ["Flight Cairo → Luxor", "Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"],
      },
      {
        day: 5,
        title: "Luxor East Bank & Departure",
        description: "Morning visit to Karnak and Luxor Temples, then fly back to Cairo for departure.",
        activities: ["Karnak Temple", "Luxor Temple", "Flight Luxor → Cairo", "Departure"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Cairo & Luxor — 5 Days
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: "cairo-luxor-5-days",
    title: "Cairo & Luxor",
    subtitle: "5 Days",
    duration: "5 Days",
    durationDays: 5,
    price: "$950",
    priceNote: "per person",
    image: "https://castletours.net/wp-content/uploads/2025/10/e3e4b92772a00bf08922a79dd5a874d7-Giza.jpg",
    gallery: [
      "https://castletours.net/wp-content/uploads/2025/10/e3e4b92772a00bf08922a79dd5a874d7-Giza.jpg",
      "https://castletours.net/wp-content/uploads/2025/10/4650f80992e4982793d5b89b01f251f2.jpg",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
    ],
    description:
      "Egypt's most iconic treasures in one journey — stand before the Giza Pyramids, explore the Grand Egyptian Museum, then travel to Luxor, the world's greatest open-air museum.",
    highlights: [
      "Giza Pyramids & Great Sphinx",
      "Grand Egyptian Museum (GEM)",
      "Valley of the Kings",
      "Hatshepsut Temple",
      "Karnak & Luxor Temples",
    ],
    locations: ["Cairo", "Luxor"],
    includes: [
      "Domestic Flights Cairo ↔ Luxor",
      "5★ Hotels (4 nights)",
      "Daily Breakfast",
      "Private A/C Transportation",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo Airport, transfer to your 5★ hotel.",
        activities: ["Airport Meet & Greet", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Giza Pyramids & GEM",
        description: "Explore the iconic Giza Plateau and the Grand Egyptian Museum.",
        activities: ["Great Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum"],
      },
      {
        day: 3,
        title: "Cairo City Highlights",
        description: "Discover Cairo's historic core — the Egyptian Museum, Old Cairo, and Khan El Khalili.",
        activities: ["Egyptian Museum", "Old Cairo Coptic Churches", "Khan El Khalili Bazaar"],
      },
      {
        day: 4,
        title: "Flight to Luxor — West Bank",
        description: "Morning flight to Luxor, afternoon exploring the West Bank.",
        activities: ["Flight Cairo → Luxor", "Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"],
      },
      {
        day: 5,
        title: "Luxor East Bank & Departure",
        description: "Visit Karnak and Luxor Temples then fly back to Cairo.",
        activities: ["Karnak Temple", "Luxor Temple", "Flight Luxor → Cairo", "Departure"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Cairo & Desert Adventure — 6 Days
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: "cairo-desert-adventure-6-days",
    title: "Cairo & Desert Adventure",
    subtitle: "6 Days",
    duration: "6 Days",
    durationDays: 6,
    price: "$1,050",
    priceNote: "per person",
    image: "https://castletours.net/wp-content/uploads/2025/10/Bahariya-Oasis.jpg",
    gallery: [
      "https://castletours.net/wp-content/uploads/2025/10/Bahariya-Oasis.jpg",
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    ],
    description:
      "Ancient history meets thrilling desert landscapes — explore Cairo's iconic Pyramids and GEM then venture deep into the Egyptian desert for quad biking, camel rides, and a magical Bedouin dinner under the stars.",
    highlights: [
      "Giza Pyramids & Grand Egyptian Museum",
      "Bahariya Oasis & Black Desert",
      "White Desert National Park",
      "Quad Biking & Camel Ride",
      "Bedouin Dinner Under the Stars",
    ],
    locations: ["Cairo", "Bahariya Oasis", "White Desert"],
    includes: [
      "5★ Hotel Cairo (3 nights)",
      "Desert Camp (2 nights)",
      "Daily Breakfast + Bedouin Dinners",
      "4×4 Desert Safari Vehicle",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches",
      "Personal Expenses",
      "Optional Quad Biking Fee",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo Airport, transfer to your 5★ hotel.",
        activities: ["Airport Meet & Greet", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Giza Pyramids & Grand Egyptian Museum",
        description: "Full day exploring the Giza Plateau and the brand-new Grand Egyptian Museum.",
        activities: ["Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum"],
      },
      {
        day: 3,
        title: "Cairo to Bahariya Oasis",
        description: "Drive to Bahariya Oasis and explore the Black Desert and Crystal Mountain.",
        activities: ["Drive to Bahariya (4 hrs)", "Black Desert", "Crystal Mountain", "Desert Camp Check-in"],
      },
      {
        day: 4,
        title: "White Desert National Park",
        description: "Explore the surreal White Desert — giant chalk formations shaped like mushrooms and icebergs.",
        activities: ["White Desert National Park", "Quad Biking (Optional)", "Camel Ride", "Bedouin Dinner & Stargazing"],
      },
      {
        day: 5,
        title: "Return to Cairo",
        description: "Morning in the oasis then drive back to Cairo. Afternoon at leisure.",
        activities: ["Oasis Springs Visit", "Drive Back to Cairo", "Khan El Khalili (Optional)"],
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast at hotel, transfer to Cairo International Airport.",
        activities: ["Breakfast", "Hotel Check-out", "Airport Transfer"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Cairo & Red Sea — 7 Days
  // ─────────────────────────────────────────────
  {
    id: 6,
    slug: "cairo-red-sea-7-days",
    title: "Cairo & Red Sea",
    subtitle: "7 Days",
    duration: "7 Days",
    durationDays: 7,
    price: "On Request",
    priceNote: "contact us",
    image: "https://castletours.net/wp-content/uploads/2025/10/5eff48_85d852fc46aa40288ca187a57aab19efmv2.jpg.avif",
    gallery: [
      "https://castletours.net/wp-content/uploads/2025/10/5eff48_85d852fc46aa40288ca187a57aab19efmv2.jpg.avif",
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    ],
    description:
      "The perfect blend of ancient wonders and Red Sea luxury — explore Cairo's Pyramids and the Grand Egyptian Museum, visit Luxor's timeless temples, then unwind on the stunning beaches of Hurghada.",
    highlights: [
      "Pyramids of Giza & Grand Egyptian Museum",
      "Luxor East & West Bank Temples",
      "Valley of the Kings",
      "Hurghada Red Sea Beach",
      "Snorkeling & Water Sports",
    ],
    locations: ["Cairo", "Luxor", "Hurghada"],
    includes: [
      "5★ Hotels Throughout",
      "Domestic Flights",
      "Daily Breakfast",
      "Private A/C Transportation",
      "English-Speaking Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
      "Water Sports Fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive at Cairo Airport, transfer to your 5★ hotel.",
        activities: ["Airport Meet & Greet", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Giza Pyramids & Grand Egyptian Museum",
        description: "Explore the Giza Plateau and the Grand Egyptian Museum.",
        activities: ["Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum"],
      },
      {
        day: 3,
        title: "Cairo City Tour",
        description: "Egyptian Museum, Old Cairo, and Khan El Khalili Bazaar.",
        activities: ["Egyptian Museum", "Coptic Cairo", "Khan El Khalili"],
      },
      {
        day: 4,
        title: "Flight to Luxor — West Bank",
        description: "Fly to Luxor and explore the West Bank monuments.",
        activities: ["Flight Cairo → Luxor", "Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"],
      },
      {
        day: 5,
        title: "Luxor East Bank & Transfer to Hurghada",
        description: "Morning temples then transfer to Hurghada by road.",
        activities: ["Karnak Temple", "Luxor Temple", "Transfer to Hurghada (3 hrs)"],
      },
      {
        day: 6,
        title: "Red Sea Day",
        description: "Full day at leisure by the Red Sea — beach, snorkeling, and water sports.",
        activities: ["Beach Relaxation", "Snorkeling Trip", "Water Sports (Optional)"],
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Hurghada Airport for departure.",
        activities: ["Breakfast", "Hotel Check-out", "Airport Transfer"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. Cairo, Luxor & Hurghada — 7 Days
  // ─────────────────────────────────────────────
  {
    id: 7,
    slug: "cairo-luxor-hurghada-7-days",
    title: "Cairo, Luxor & Hurghada",
    subtitle: "7 Days",
    duration: "7 Days",
    durationDays: 7,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
      "https://images.unsplash.com/photo-1477894880577-8b2f87157e26?w=800&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    ],
    description:
      "Egypt's best in one trip — the Pyramids of Giza, Valley of the Kings in Luxor, and the warm turquoise waters of Hurghada all in 7 unforgettable days.",
    highlights: [
      "Pyramids of Giza & Sphinx",
      "Grand Egyptian Museum",
      "Valley of the Kings",
      "Karnak Temple Complex",
      "Hurghada Red Sea Beach",
    ],
    locations: ["Cairo", "Luxor", "Hurghada"],
    includes: [
      "Hotels Throughout",
      "Daily Breakfast",
      "Domestic Flights",
      "Private Transfers",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Arrive and transfer to hotel.",
        activities: ["Airport Pick-up", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Pyramids & GEM",
        description: "Giza Pyramids, Sphinx, and Grand Egyptian Museum.",
        activities: ["Pyramids of Giza", "Great Sphinx", "Grand Egyptian Museum"],
      },
      {
        day: 3,
        title: "Cairo Sightseeing",
        description: "Egyptian Museum, Citadel, and Khan El Khalili.",
        activities: ["Egyptian Museum", "Citadel of Saladin", "Khan El Khalili"],
      },
      {
        day: 4,
        title: "Flight to Luxor",
        description: "Fly to Luxor and visit the East Bank temples.",
        activities: ["Flight Cairo → Luxor", "Karnak Temple", "Luxor Temple"],
      },
      {
        day: 5,
        title: "Luxor West Bank",
        description: "Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon.",
        activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"],
      },
      {
        day: 6,
        title: "Luxor → Hurghada & Beach Day",
        description: "Transfer to Hurghada and enjoy the Red Sea.",
        activities: ["Transfer Luxor → Hurghada", "Beach & Snorkeling", "Resort Check-in"],
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Hurghada Airport.",
        activities: ["Breakfast", "Check-out", "Airport Transfer"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. Egypt Grand Tour — 8 Days
  // ─────────────────────────────────────────────
  {
    id: 8,
    slug: "egypt-grand-tour-8-days",
    title: "Egypt Grand Tour",
    subtitle: "8 Days / 7 Nights",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
      "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=800&q=80",
    ],
    description:
      "8 days across Egypt's legendary destinations — Cairo's ancient wonders, a Nile experience in Luxor, and relaxation by the Red Sea in Hurghada. The perfect balanced Egypt tour.",
    highlights: [
      "Grand Egyptian Museum & Pyramids",
      "Luxor Temples & Valley of Kings",
      "Nile Felucca Experience",
      "Hurghada Red Sea Resort",
      "Expert-Guided Throughout",
    ],
    locations: ["Cairo", "Luxor", "Hurghada"],
    includes: [
      "Hotels Throughout (7 nights)",
      "Daily Breakfast",
      "All Domestic Transfers",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners",
      "Personal Expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", description: "Arrive and check in.", activities: ["Airport Pick-up", "Hotel Check-in"] },
      { day: 2, title: "Pyramids & GEM", description: "Full day Giza and GEM.", activities: ["Pyramids", "Sphinx", "GEM"] },
      { day: 3, title: "Cairo Highlights", description: "Egyptian Museum, Old Cairo, Bazaar.", activities: ["Egyptian Museum", "Coptic Cairo", "Khan El Khalili"] },
      { day: 4, title: "Cairo Free Day", description: "Optional city tour or shopping.", activities: ["Leisure / Optional Tours"] },
      { day: 5, title: "Flight to Luxor — East Bank", description: "Fly to Luxor, Karnak & Luxor Temples.", activities: ["Flight Cairo → Luxor", "Karnak Temple", "Luxor Temple"] },
      { day: 6, title: "Luxor West Bank", description: "Valley of the Kings and West Bank highlights.", activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"] },
      { day: 7, title: "Luxor → Hurghada", description: "Transfer to Hurghada, beach day.", activities: ["Transfer to Hurghada", "Red Sea Beach", "Resort Check-in"] },
      { day: 8, title: "Departure", description: "Airport transfer.", activities: ["Breakfast", "Check-out", "Airport Transfer"] },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. Cairo, Sharm & Dahab — 8 Days
  // ─────────────────────────────────────────────
  {
    id: 9,
    slug: "cairo-sharm-dahab-8-days",
    title: "Cairo, Sharm & Dahab",
    subtitle: "8 Days / 7 Nights",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1562521279-a9e47a3bde1e?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562521279-a9e47a3bde1e?w=800&q=80",
      "https://castletours.net/wp-content/uploads/2026/02/egypt-4796256_1920-450x300.webp",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    ],
    description:
      "History meets paradise — explore Cairo's ancient icons then escape to the turquoise shores of Sharm El Sheikh and the bohemian charm of Dahab.",
    highlights: [
      "Pyramids of Giza & Sphinx",
      "Grand Egyptian Museum",
      "Sharm El Sheikh Beaches",
      "Dahab Blue Hole Diving",
      "St. Catherine Monastery",
    ],
    locations: ["Cairo", "Sharm El Sheikh", "Dahab"],
    includes: [
      "Hotels Throughout (7 nights)",
      "Daily Breakfast",
      "Domestic Flights",
      "Private Transfers",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Diving Fees",
      "Lunches & Dinners",
      "Personal Expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", description: "Arrive and check in.", activities: ["Airport Pick-up", "Hotel Check-in"] },
      { day: 2, title: "Pyramids & GEM", description: "Giza Plateau and Grand Egyptian Museum.", activities: ["Pyramids", "Sphinx", "GEM"] },
      { day: 3, title: "Cairo Sightseeing", description: "Egyptian Museum, Citadel, Bazaar.", activities: ["Egyptian Museum", "Citadel", "Khan El Khalili"] },
      { day: 4, title: "Flight to Sharm El Sheikh", description: "Fly to Sharm, resort check-in.", activities: ["Flight Cairo → Sharm", "Resort Check-in", "Beach Leisure"] },
      { day: 5, title: "Sharm Beach & Water Activities", description: "Full day Red Sea activities.", activities: ["Naama Bay", "Snorkeling / Diving", "Ras Mohamed (Optional)"] },
      { day: 6, title: "Day Trip to Dahab", description: "Explore the laid-back town of Dahab and its famous Blue Hole.", activities: ["Drive to Dahab", "Blue Hole Snorkeling/Diving", "Dahab Town Stroll"] },
      { day: 7, title: "St. Catherine Monastery", description: "Early morning excursion to St. Catherine.", activities: ["St. Catherine Monastery", "Moses Mountain (Optional)", "Return to Sharm"] },
      { day: 8, title: "Departure", description: "Transfer to Sharm El Sheikh Airport.", activities: ["Breakfast", "Check-out", "Airport Transfer"] },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Cairo, Nile Cruise & Hurghada — 8 Days
  // ─────────────────────────────────────────────
  {
    id: 10,
    slug: "cairo-nile-cruise-hurghada-8-days",
    title: "Cairo, Nile Cruise & Hurghada",
    subtitle: "8 Days",
    duration: "8 Days",
    durationDays: 8,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=800&q=80",
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
    ],
    description:
      "A journey of history and luxury — discover Cairo's icons, sail the Nile in style from Luxor to Aswan, and finish with sun-drenched days on Hurghada's Red Sea coast.",
    highlights: [
      "Pyramids of Giza & Grand Egyptian Museum",
      "Luxury Nile Cruise Luxor → Aswan",
      "Valley of the Kings",
      "Philae Temple & Aswan High Dam",
      "Hurghada Red Sea Beach",
    ],
    locations: ["Cairo", "Luxor", "Aswan", "Hurghada"],
    includes: [
      "5★ Hotels + Luxury Nile Cruise",
      "Daily Breakfast + Full Board on Cruise",
      "All Domestic Transfers",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners (except cruise)",
      "Personal Expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", description: "Arrive and check in.", activities: ["Airport Pick-up", "Hotel Check-in"] },
      { day: 2, title: "Pyramids & GEM", description: "Giza and Grand Egyptian Museum.", activities: ["Pyramids", "Sphinx", "GEM"] },
      { day: 3, title: "Flight to Luxor & Cruise Embarkation", description: "Fly to Luxor, board Nile Cruise.", activities: ["Flight Cairo → Luxor", "Karnak Temple", "Nile Cruise Embarkation"] },
      { day: 4, title: "Luxor West Bank", description: "Valley of the Kings and Hatshepsut Temple.", activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"] },
      { day: 5, title: "Edfu & Kom Ombo", description: "Temple of Horus and Kom Ombo while sailing.", activities: ["Temple of Horus Edfu", "Kom Ombo Temple", "Nile Sailing"] },
      { day: 6, title: "Aswan", description: "Philae Temple, Aswan High Dam, Nubian Village.", activities: ["Philae Temple", "Aswan High Dam", "Nubian Village", "Felucca Ride"] },
      { day: 7, title: "Aswan → Hurghada", description: "Disembark and transfer to Hurghada.", activities: ["Cruise Disembarkation", "Transfer Aswan → Hurghada", "Beach Check-in"] },
      { day: 8, title: "Departure", description: "Transfer to Hurghada Airport.", activities: ["Beach Leisure", "Check-out", "Airport Transfer"] },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Amazing 9 Days — Abu Simbel & Red Sea
  // ─────────────────────────────────────────────
  {
    id: 11,
    slug: "egypt-abu-simbel-red-sea-9-days",
    title: "Amazing Egypt — Abu Simbel & Red Sea",
    subtitle: "9 Days",
    duration: "9 Days",
    durationDays: 9,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=800&q=80",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
      "https://castletours.net/wp-content/uploads/2025/10/camel-and-the-pyramids.webp",
    ],
    description:
      "The ultimate Egypt experience — Cairo, a full Nile Cruise from Luxor to Aswan, the legendary Abu Simbel temples, and a relaxing finale by the Red Sea.",
    highlights: [
      "Pyramids of Giza & GEM",
      "Full Nile Cruise Luxor → Aswan",
      "Abu Simbel Temples",
      "Philae Temple & Aswan",
      "Red Sea Beach Relaxation",
    ],
    locations: ["Cairo", "Luxor", "Aswan", "Abu Simbel", "Red Sea"],
    includes: [
      "5★ Hotels + Nile Cruise",
      "Daily Breakfast + Full Board on Cruise",
      "Domestic Flights",
      "Expert English Guide",
      "All Entrance Fees including Abu Simbel",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners (except cruise)",
      "Personal Expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", description: "Arrive and check in.", activities: ["Airport Pick-up", "Hotel Check-in"] },
      { day: 2, title: "Pyramids & GEM", description: "Giza and Grand Egyptian Museum.", activities: ["Pyramids", "Sphinx", "GEM"] },
      { day: 3, title: "Cairo → Luxor, Cruise Embarkation", description: "Fly to Luxor and board cruise.", activities: ["Flight Cairo → Luxor", "Luxor Temple", "Cruise Embarkation"] },
      { day: 4, title: "Luxor West Bank", description: "Valley of the Kings and Hatshepsut.", activities: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon"] },
      { day: 5, title: "Edfu & Kom Ombo", description: "Temples along the Nile while sailing.", activities: ["Temple of Horus Edfu", "Kom Ombo Temple"] },
      { day: 6, title: "Aswan & Abu Simbel", description: "Philae Temple and excursion to Abu Simbel.", activities: ["Philae Temple", "Aswan High Dam", "Abu Simbel Excursion"] },
      { day: 7, title: "Aswan Free Day & Nubian Culture", description: "Felucca ride and Nubian village.", activities: ["Felucca Ride", "Nubian Village", "Cruise Disembarkation"] },
      { day: 8, title: "Transfer to Red Sea", description: "Transfer to Hurghada for beach relaxation.", activities: ["Transfer Aswan → Hurghada", "Beach Leisure", "Hotel Check-in"] },
      { day: 9, title: "Departure", description: "Transfer to Hurghada Airport.", activities: ["Breakfast", "Check-out", "Airport Transfer"] },
    ],
  },

  // ─────────────────────────────────────────────
  // 12. 9 Days Cairo, Luxor, Aswan & Hurghada
  // ─────────────────────────────────────────────
  {
    id: 12,
    slug: "cairo-luxor-aswan-hurghada-9-days",
    title: "Cairo, Luxor, Aswan & Hurghada",
    subtitle: "9 Days",
    duration: "9 Days",
    durationDays: 9,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1477894880577-8b2f87157e26?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1477894880577-8b2f87157e26?w=800&q=80",
      "https://images.unsplash.com/photo-1592861955049-f0e4a80a8082?w=800&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    ],
    description:
      "A complete Egyptian odyssey — ancient Cairo, majestic Luxor and Aswan with a Nile Cruise, then unwind on Hurghada's golden beaches for a perfect finale.",
    highlights: [
      "Pyramids of Giza & Grand Egyptian Museum",
      "Nile Cruise Included",
      "Karnak & Valley of the Kings",
      "Philae Temple & Aswan",
      "Hurghada Beach Days",
    ],
    locations: ["Cairo", "Luxor", "Aswan", "Hurghada"],
    includes: [
      "5★ Hotels + Nile Cruise (full board)",
      "Daily Breakfast",
      "Domestic Flights",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Lunches & Dinners (except cruise)",
      "Personal Expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival Cairo", description: "Arrive and check in.", activities: ["Airport Pick-up", "Hotel Check-in"] },
      { day: 2, title: "Pyramids & GEM", description: "Giza and Grand Egyptian Museum.", activities: ["Pyramids", "Sphinx", "GEM"] },
      { day: 3, title: "Cairo Sightseeing", description: "Old Cairo, Citadel, Khan El Khalili.", activities: ["Egyptian Museum", "Coptic Cairo", "Khan El Khalili"] },
      { day: 4, title: "Flight to Luxor", description: "Fly to Luxor, Karnak and Luxor Temples.", activities: ["Flight Cairo → Luxor", "Karnak Temple", "Luxor Temple"] },
      { day: 5, title: "Luxor West Bank & Cruise Embarkation", description: "Valley of the Kings then board cruise.", activities: ["Valley of the Kings", "Hatshepsut Temple", "Cruise Embarkation"] },
      { day: 6, title: "Edfu & Kom Ombo", description: "Two magnificent riverside temples.", activities: ["Temple of Horus Edfu", "Kom Ombo Temple"] },
      { day: 7, title: "Aswan", description: "Philae Temple, High Dam, Nubian Village.", activities: ["Philae Temple", "Aswan High Dam", "Nubian Village", "Cruise Disembarkation"] },
      { day: 8, title: "Aswan → Hurghada", description: "Transfer to Hurghada for beach day.", activities: ["Transfer to Hurghada", "Red Sea Beach", "Hotel Check-in"] },
      { day: 9, title: "Departure", description: "Transfer to Hurghada Airport.", activities: ["Breakfast", "Check-out", "Airport Transfer"] },
    ],
  },

  // ─────────────────────────────────────────────
  // 13. 2-Day Luxor Adventure
  // ─────────────────────────────────────────────
  {
    id: 13,
    slug: "luxor-adventure-2-days",
    title: "2-Day Luxor Adventure",
    subtitle: "2 Days",
    duration: "2 Days",
    durationDays: 2,
    price: "On Request",
    priceNote: "contact us",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
      "https://images.unsplash.com/photo-1477894880577-8b2f87157e26?w=800&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    ],
    description:
      "A breathtaking short escape to Luxor — a magical Hot Air Balloon flight over the Valley of the Kings at sunrise and a peaceful Felucca ride on the Nile, departing from Cairo.",
    highlights: [
      "Hot Air Balloon over Valley of the Kings",
      "Felucca Nile Ride at Sunset",
      "Valley of the Kings",
      "Karnak Temple Complex",
      "Luxor Temple by Night",
    ],
    locations: ["Cairo", "Luxor"],
    includes: [
      "Transport Cairo → Luxor → Cairo",
      "Hotel in Luxor (1 night)",
      "Hot Air Balloon Flight",
      "Felucca Nile Ride",
      "Expert English Guide",
      "All Entrance Fees",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Meals",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cairo → Luxor — Hot Air Balloon & Valley of the Kings",
        description: "Early morning transfer to Luxor Airport. At sunrise, take off on a magical hot air balloon over the Valley of the Kings. Then explore the West Bank monuments.",
        activities: ["Flight / Transfer Cairo → Luxor", "Hot Air Balloon at Sunrise", "Valley of the Kings", "Hatshepsut Temple", "Hotel Check-in"],
      },
      {
        day: 2,
        title: "Felucca Ride, Karnak & Return to Cairo",
        description: "Morning visit to Karnak and Luxor Temples, followed by a relaxing Felucca ride on the Nile at sunset, then return to Cairo.",
        activities: ["Karnak Temple", "Luxor Temple", "Felucca Nile Ride", "Transfer Luxor → Cairo"],
      },
    ],
  },
];

// Helper — get single package by slug
export function getPackageBySlug(slug: string): Package | undefined {
  return egyptPackages.find((p) => p.slug === slug);
}

// Helper — get all slugs (used in getStaticPaths)
export function getAllSlugs(): string[] {
  return egyptPackages.map((p) => p.slug);
}