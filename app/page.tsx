async function fetchData() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 }, // ✅ ISR
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

  return data.products;
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
