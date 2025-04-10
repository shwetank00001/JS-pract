import Link from "next/link";

export default function products() {
  const prods = ["Item 1", " Item 2", "Item 3"];

  const ele = prods.map(function (item) {
    return (
      <ul>
        <Link href={`/products/${item}`}>{item}</Link>
      </ul>
    );
  });
  return <>{ele}</>;
}
