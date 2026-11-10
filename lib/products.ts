export type Item = { name: string; slug: string; img: string; alt: string };
export type Category = {
  slug: string;
  name: string;
  blurb: string;
  uses: string;
  img: string;
  items: Item[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
// Each row: product name, image file in public/images/products, description of what the photo shows.
const mk = (rows: [string, string, string][]): Item[] =>
  rows.map(([name, file, alt]) => ({ name, alt, img: `/images/products/${file}.jpg`, slug: slugify(name) }));

// Keep only products Vreekshya actually makes or supplies.
export const categories: Category[] = [
  {
    slug: "dehydrated-vegetables",
    img: "/images/products/sun-dried-peppers.jpg",
    name: "Dehydrated Vegetables",
    blurb:
      "Convenient, versatile and easy-to-store alternatives to fresh vegetables.",
    uses: "Ready-to-eat meals, soups, instant mixes, seasonings and food manufacturing.",
    items: mk([
      ["Dehydrated Onion", "dried-onions", "Dried onions at harvest"],
      ["Dehydrated Garlic", "dried-garlic", "Dried garlic bulbs hanging in a bunch"],
      ["Dehydrated Tomato", "sun-dried-tomatoes", "Tomatoes drying in the sun"],
      ["Dehydrated Carrot", "carrot", "Chopped orange carrot pieces"],
      ["Dehydrated Potato", "sun-dried-peppers", "Sun-dried peppers, representative of dehydrated vegetables"],
      ["Dehydrated Green Peas", "peas", "Dried green peas spilling from a glass jar"],
      ["Dehydrated Spinach", "dried-herbs", "Dried herbs and leaves"],
      ["Dehydrated Cabbage", "sun-dried-peppers", "Sun-dried peppers, representative of dehydrated vegetables"],
      ["Dehydrated Beetroot", "sun-dried-tomatoes", "Sun-dried tomatoes, representative of dehydrated vegetables"],
      ["Dehydrated Moringa Leaves", "dried-herbs", "Dried herbs and leaves"],
      ["Mixed Dehydrated Vegetables", "sun-dried-peppers", "Sun-dried peppers hanging to dry"],
    ]),
  },
  {
    slug: "dehydrated-fruits",
    img: "/images/products/dried-fruit-slices.jpg",
    name: "Dehydrated Fruits",
    blurb:
      "Fruit ingredients that keep their convenience and versatility across applications.",
    uses: "Snacks, breakfast cereals, bakery, confectionery, desserts and food manufacturing.",
    items: mk([
      ["Dehydrated Mango", "mango", "Bowl of dried mango slices"],
      ["Dehydrated Banana", "banana", "Dried banana slices among other dried fruit"],
      ["Dehydrated Apple", "dried-apple-slices", "Apple slices drying in a food dehydrator"],
      ["Dehydrated Pineapple", "dried-pineapple-rings", "Dried pineapple rings displayed at a market"],
      ["Dehydrated Papaya", "dried-fruit-slices", "Assorted dried fruit slices"],
      ["Dehydrated Guava", "dried-fruit-assortment", "Assorted dried fruit shown as a representative image for dehydrated guava"],
      ["Mixed Dehydrated Fruits", "mixed-dried-fruits-market", "Assorted dried fruits displayed at a market"],
    ]),
  },
  {
    slug: "herbs-and-leaves",
    img: "/images/products/dried-herbs.jpg",
    name: "Dehydrated Herbs & Leaves",
    blurb:
      "Distinctive flavours for food manufacturers, seasoning companies, spice processors and consumers.",
    uses: "Seasonings, spice blends, food formulations and everyday cooking.",
    items: mk([
      ["Moringa Leaves", "moringa", "Moringa leaves on a branch"],
      ["Mint Leaves", "mint-dried-jar", "Dried mint leaves in a glass jar"],
      ["Coriander Leaves", "coriander", "Fresh coriander leaves"],
      ["Curry Leaves", "curry-leaves", "Curry leaves with spices"],
      ["Basil", "basil-dried", "Dried basil in a spice jar and serving dishes"],
      ["Fenugreek Leaves", "herbs-and-powder", "Dried leafy herbs with spices, representative of fenugreek leaves"],
      ["Other Seasonal Herbs", "dried-herbs", "Dried herbs on a wooden spoon"],
    ]),
  },
  {
    slug: "fruit-and-vegetable-powders",
    img: "/images/products/powders.jpg",
    name: "Fruit & Vegetable Powders",
    blurb:
      "Easy-blending, consistent ingredient formats for formulations and instant preparations.",
    uses: "Seasoning blends, nutritional foods, bakery applications and instant mixes.",
    items: mk([
      ["Moringa Powder", "moringa-powder", "Bowl of green leaf powder"],
      ["Tomato Powder", "red-powder", "Spoon of red powder"],
      ["Onion Powder", "light-powder", "Light powder in a jar with a wooden spoon"],
      ["Garlic Powder", "light-powder", "Light powder in a jar with a wooden spoon"],
      ["Beetroot Powder", "red-powder", "Red vegetable powder in a spoon"],
      ["Spinach Powder", "green-powder", "Spoon of green powder"],
      ["Mango Powder", "mango", "Bowl of dried mango slices"],
      ["Other Vegetable & Fruit Powders", "powders", "Bowls of coloured powders"],
    ]),
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
