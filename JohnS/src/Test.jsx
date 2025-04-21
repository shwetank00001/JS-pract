import { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const url = "https://67bf5cc8b2320ee0501381f5.mockapi.io/ecom";

  useEffect(() => {
    async function getData() {
      const data = await fetch(url);
      const respData = await data.json();
      console.log(respData);
    }

    getData();
  }, []);
  return (
    <div>
      <h1>sdkjifhnkijosf</h1>
    </div>
  );
};

export default Test;
