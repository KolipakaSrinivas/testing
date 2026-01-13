export default function Product({ data }) {
  console.log(data);
  if(data.length == 0) {
    return <h1>No Data</h1>
  }
  return (
    <div>
      {data.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
}
