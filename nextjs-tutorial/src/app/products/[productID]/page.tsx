"use client"
import { useParams } from "next/navigation";

export default function productDetails() {

  const {productID} = useParams()
  console.log(productID)
    return (
      <>
        <h1>Detail for every item. </h1>
        <h3>The detail is for: {productID}</h3>
      </>
    );
  }
  