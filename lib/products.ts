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
    img: "/images/products/mixed-vegetables.jpg",
    name: "Dehydrated Vegetables",
    blurb:
      "Convenient, versatile and easy-to-store alternatives to fresh vegetables.",
    uses: "Ready-to-eat meals, soups, instant mixes, seasonings and food manufacturing.",
    items: mk([
      ["Dehydrated Onion", "onion", "Whole red onion"],
      ["Dehydrated Garlic", "garlic", "Garlic cloves"],
      ["Dehydrated Tomato", "tomato", "Tray of dried red tomatoes"],
      ["Dehydrated Carrot", "carrot", "Chopped orange carrot pieces"],
      ["Dehydrated Potato", "potato", "Whole potatoes on a dark board"],
      ["Dehydrated Green Peas", "peas", "Dried green peas spilling from a glass jar"],
      ["Dehydrated Spinach", "spinach", "Spinach leaves"],
      ["Dehydrated Cabbage", "cabbage", "Halved red cabbage"],
      ["Dehydrated Beetroot", "beetroot", "Whole beetroot"],
      ["Dehydrated Moringa Leaves", "moringa", "Moringa leaves on the branch"],
      ["Mixed Dehydrated Vegetables", "mixed-vegetables", "Assorted peppers and cabbage"],
    ]),
  },
  {
    slug: "dehydrated-fruits",
    img: "/images/products/mixed-fruits.jpg",
    name: "Dehydrated Fruits",
    blurb:
      "Fruit ingredients that keep their convenience and versatility across applications.",
    uses: "Snacks, breakfast cereals, bakery, confectionery, desserts and food manufacturing.",
    items: mk([
      ["Dehydrated Mango", "mango", "Bowl of dried mango slices"],
      ["Dehydrated Banana", "banana", "Dried banana slices among other dried fruit"],
      ["Dehydrated Apple", "apple", "Dried apple slices"],
      ["Dehydrated Pineapple", "pineapple", "Sliced pineapple"],
      ["Dehydrated Papaya", "papaya", "Halved papaya"],
      ["Dehydrated Guava", "guava", "Guavas with one cut open"],
      ["Mixed Dehydrated Fruits", "mixed-fruits", "Assorted dried fruit on display"],
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
      ["Moringa Leaves", "moringa", "Moringa leaves on the branch"],
      ["Mint Leaves", "mint", "Mint leaves"],
      ["Coriander Leaves", "coriander", "Coriander leaves"],
      ["Curry Leaves", "dried-herbs", "Dried herbs on a wooden spoon"],
      ["Basil", "basil", "Basil leaves"],
      ["Fenugreek Leaves", "herbs-and-powder", "Dried herbs and ground spice in small bowls"],
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
      ["Beetroot Powder", "beetroot-slices", "Sliced beetroot on a wooden board"],
      ["Spinach Powder", "green-powder", "Spoon of green powder"],
      ["Mango Powder", "mango", "Bowl of dried mango slices"],
      ["Other Vegetable & Fruit Powders", "powders", "Bowls of coloured powders"],
    ]),
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
