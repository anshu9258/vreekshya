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

// Product imagery and names supplied by the site owner are kept in the catalog.
export const categories: Category[] = [
  {
    slug: "dehydrated-vegetables",
    img: "/images/products/tomato-product.jpg",
    name: "Dehydrated Vegetables",
    blurb:
      "Convenient, versatile and easy-to-store alternatives to fresh vegetables.",
    uses: "Ready-to-eat meals, soups, instant mixes, seasonings and food manufacturing.",
    items: mk([
      ["Dehydrated Tomato", "tomato-product", "Fresh tomatoes alongside dehydrated tomato and tomato powder"],
      ["Dehydrated Beetroot", "beetroot-product", "Fresh beetroot alongside dehydrated beetroot and beetroot powder"],
      ["Dehydrated Radish", "radish-product", "Fresh daikon radish alongside dehydrated radish and radish powder"],
      ["Dehydrated Carrot", "carrot-product", "Fresh carrots alongside dehydrated carrot and carrot powder"],
      ["Dehydrated Ginger", "ginger-product", "Fresh ginger alongside dehydrated ginger and ginger powder"],
      ["Dehydrated Spinach", "spinach-product", "Fresh spinach alongside dehydrated spinach"],
      ["Dehydrated Onion", "dried-onions", "Dried onions at harvest"],
      ["Dehydrated Garlic", "dried-garlic", "Dried garlic bulbs hanging in a bunch"],
      ["Dehydrated Potato", "potato", "Potatoes"],
      ["Dehydrated Mushroom", "mixed-vegetables", "Assorted vegetables, representative image for dehydrated mushrooms"],
      ["Dehydrated Cabbage", "cabbage", "Cabbage"],
      ["Dehydrated Cauliflower", "mixed-vegetables", "Assorted vegetables, representative image for dehydrated cauliflower"],
      ["Dehydrated Green Chilli", "green-chilli-product", "Fresh green chillies alongside dehydrated green chilli"],
      ["Dehydrated Bottle Gourd", "mixed-vegetables", "Assorted vegetables, representative image for dehydrated bottle gourd"],
      ["Dehydrated Bitter Gourd", "bitter-gourd-product", "Fresh bitter gourd alongside dehydrated slices and powder"],
      ["Dehydrated Okra (Ladyfinger)", "okra-product", "Fresh okra alongside dehydrated okra"],
      ["Dehydrated Brinjal (Eggplant)", "brinjal-product", "Fresh eggplant alongside dehydrated eggplant"],
      ["Dehydrated Pumpkin", "pumpkin-product", "Fresh pumpkin alongside dried pumpkin slices"],
      ["Dehydrated Ridge Gourd", "ridge-gourd-product", "Fresh ridge gourd alongside dried slices"],
      ["Dehydrated Pointed Gourd (Parwal)", "mixed-vegetables", "Assorted vegetables, representative image for dehydrated pointed gourd"],
      ["Dehydrated Green Peas", "green-peas-product", "Fresh green peas alongside dehydrated green peas"],
    ]),
  },
  {
    slug: "dehydrated-fruits",
    img: "/images/products/jackfruit-product.jpg",
    name: "Dehydrated Fruits",
    blurb:
      "Fruit ingredients that keep their convenience and versatility across applications.",
    uses: "Snacks, breakfast cereals, bakery, confectionery, desserts and food manufacturing.",
    items: mk([
      ["Dehydrated Jackfruit", "jackfruit-product", "Fresh jackfruit alongside golden dried jackfruit chips"],
      ["Dehydrated Amla", "amla-product", "Fresh amla alongside dehydrated amla"],
      ["Dehydrated Lemon", "lemon-product", "Fresh lemons alongside dried lemon slices"],
      ["Dehydrated Papaya", "papaya-product", "Papaya alongside dried slices and papaya powder"],
      ["Dehydrated Banana", "banana-product", "Banana alongside golden dried banana chips"],
      ["Dehydrated Mango", "mango-product", "Mango alongside vibrant dried mango slices and powder"],
      ["Dehydrated Guava", "guava", "Guava"],
      ["Dehydrated Jamun", "jamun-product", "Fresh jamun alongside dried jamun"],
      ["Dehydrated Tamarind", "tamarind-product", "Tamarind pods alongside dried tamarind slices"],
      ["Dehydrated Wood Apple (Bel)", "wood-apple-product", "Wood apple alongside dried wood apple"],
      ["Dehydrated Custard Apple (Sitaphal)", "custard-apple-product", "Custard apple alongside dried custard apple"],
      ["Dehydrated Ber (Indian Jujube)", "ber-product", "Fresh ber alongside dried Indian jujube"],
    ]),
  },
  {
    slug: "herbs-and-leaves",
    img: "/images/products/coriander-leaves-product.jpg",
    name: "Dehydrated Herbs & Leaves",
    blurb:
      "Distinctive flavours for food manufacturers, seasoning companies, spice processors and consumers.",
    uses: "Seasonings, spice blends, food formulations and everyday cooking.",
    items: mk([
      ["Coriander Leaves", "coriander-leaves-product", "Fresh coriander leaves alongside dried coriander leaves"],
      ["Curry Leaves", "curry-leaves-product", "Fresh curry leaves alongside dried curry leaves"],
      ["Moringa Leaves & Pods", "moringa-leaves-pods-product", "Dried moringa leaves and pods"],
      ["Fenugreek Leaves", "fenugreek-leaves-product", "Fresh fenugreek leaves alongside dried fenugreek leaves"],
      ["Mint Leaves", "mint-leaves-product", "Fresh mint leaves alongside dried mint leaves"],
      ["Amaranth Greens (Chaulai)", "amaranth-greens-product", "Amaranth greens (chaulai)"],
      ["Colocasia Leaves (Arbi Patta)", "colocasia-leaves-product", "Colocasia leaves (arbi patta)"],
      ["Herbal Tulsi Leaves", "tulsi-leaves-product", "Fresh tulsi leaves alongside dried tulsi leaves"],
      ["Lemongrass", "lemongrass-product", "Lemongrass"],
      ["Neem Leaves", "neem-leaves-product", "Neem leaves alongside green neem powder"],
      ["Palash Flowers/Leaves (Seasonal Wild Collection)", "palash-flowers-product", "Palash flowers and leaves"],
    ]),
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
