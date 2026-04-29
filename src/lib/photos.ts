// Curated Unsplash automotive photography. Real, royalty-free.
// Sized small (w=1600) and via Unsplash CDN with auto format/quality.
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroCar: u("1492144534655-ae79c964c9d7"), // luxury car hero
  heroCity: u("1503376780353-7e6692767b70"), // car at night
  towTruck: u("1597007030739-6d2e7172ee6c"), // tow truck
  cashHandover: u("1554224155-6726b3ff858f"), // money in hand
  garage: u("1486006920555-c77dcf18193c"), // mechanic garage
  carKeys: u("1542362567-b07e54358753"), // keys
  damagedCar: u("1605152276897-4f618f831968"), // damaged car
  oldCar: u("1568605117036-5fe5e7bab0b3"), // older sedan
  suv: u("1494976388531-d1058494cdd8"), // suv
  ute: u("1606664515524-ed2f786a0bd6"), // ute / pickup
  carInspection: u("1517524008697-84bbe3c3fd98"), // inspection
  paperwork: u("1450101499163-c8848c66ca85"), // paperwork
  recycling: u("1532996122724-e3c354a0b15b"), // metal recycling
  family: u("1581291518857-4e27b48ff24e"), // happy customer
  team: u("1556761175-5973dc0f32e7"), // team / business
  truckHighway: u("1601584115197-04ecc0da31d7"), // truck highway
  blueCar: u("1503376780353-7e6692767b70"), // blue
  silverCar: u("1494976388531-d1058494cdd8"),
  scrapyard: u("1632323093603-3aa1b07a7d2c"),
  electric: u("1593941707882-a5bba14938c7"),
};

export const customerAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80",
];
