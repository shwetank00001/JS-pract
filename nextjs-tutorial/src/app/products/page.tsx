export default function products() {
  const prods = ["Item 1", " Item 2", "Item 3"];

  const ele = prods.map(function (item) {
    return (
      <ul>
        <li>{item}</li>
      </ul>
    );
  });
  return <>{ele}</>;
}
