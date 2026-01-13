async function fetchData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
