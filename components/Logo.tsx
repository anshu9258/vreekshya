import { site } from "@/lib/site";

// Simple tree-and-leaf mark. "Vreekshya" comes from the Sanskrit word for tree.
export default function Logo() {
  return (
    <>
      <svg className="logo-mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path fill="currentColor" d="M16 2C9 7 6.5 12.5 7.5 17.5c.8 3.8 3.8 6.4 7.5 7V30h2v-5.5c3.700-.6 6.700-3.200 7.500-7C25.500 12.500 23 7 16 2Zm1 20.400v-5.200l4-3.600-1.300-1.500-2.700 2.400V9h-2v7.500l-2.700-2.400-1.300 1.500 4 3.600v3.200c-2.500-.6-4.400-2.500-5-5.100-.7-3.500 1-7.500 6-11.700 5 4.200 6.700 8.200 6 11.700-.6 2.600-2.500 4.500-5 5.100Z" />
      </svg>
      <span>{site.name}</span>
    </>
  );
}
