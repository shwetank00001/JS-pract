import React from "react";

export default function Reducer() {
  const [data, setData] = React.useState("");
  const [dataList, setList] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    const newData = {
      id: new Date().getTime(),
      data: data,
    };
    setList(function (item) {
      return [...item, newData];
    });
  }

  const removeData = (idParam) => {
    const newData = dataList.filter(function (item) {
      return item.id !== idParam;
    });
    setList(newData);
  };

  const dispList = dataList.map(function (item) {
    return (
      <div key={item.id}>
        <h3>{item.data}</h3>
        <button onClick={() => removeData(item.id)}>-</button>
      </div>
    );
  });

  console.log(dispList);
  return (
    <>
      <h1>Reducer revise</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add.."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {dispList}
    </>
  );
}
