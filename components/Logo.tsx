import Image from "next/image";
import { site } from "@/lib/site";

export default function Logo() {
  return (
    <>
      <Image className="logo-image" src="/images/site/vreekshya-logo.png" alt="" width={66} height={70} priority />
      <span>{site.name}</span>
    </>
  );
}
