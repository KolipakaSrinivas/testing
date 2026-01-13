export const dynamic = "force-dynamic";

async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const text = await res.text();

  // 🔐 Safety check
  if (!text) {
    throw new Error("Empty response");
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error("Response is not JSON:", text);
    throw new Error("Invalid JSON response");
  }

  return data;
}

import Product from "@/app/products/Product";
export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      <Product data={data} />
    </div>
  );
}
