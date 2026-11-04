import Image from "next/image";
import Link from "next/link";
import type { Item } from "@/lib/products";

export default function ProductCard({ item, category }: { item: Item; category: string }) {
  return (
    <Link className="card" href={`/products/${category}/${item.slug}`}>
      <span className="card-img">
        <Image src={item.img} alt={item.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 280px" />
      </span>
      <span className="card-name">{item.name}</span>
    </Link>
  );
}
