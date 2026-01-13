export default function Product({ data }) {
  console.log(data);
  if (Array.isArray(data)) {
    return data.length && <h1>No Data</h1>;
  }
  return (
    <div>
      {data.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
}
