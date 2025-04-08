import React from "react";

export default function Reducer() {
  const [data, setData] = React.useState("");
  // const [dataList, setList] = React.useState([]);

  const defaultState = {
    dataList: [],
    isModal: true,
  };

  const reducer = (state, action) => {
    if (action.type === "add") {
      const newValue = [...state.dataList, action.payload];
      return {
        dataList: newValue,
        isModal: true,
      };
    }
    if (action.type === "remo") {
      const newValue = state.dataList.filter(
        (item) => item.id !== action.payload
      );
      return {
        dataList: newValue,
        isModal: true,
      };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    const newData = {
      id: new Date().getTime(),
      data: data,
    };
    dispatch({ type: "add", payload: newData });
    // setList(function (item) {
    //   return [...item, newData];
    // });
  }

  const removeData = (idParam) => {
    // const newData = state.dataList.filter(function (item) {
    //   return item.id !== idParam;
    // });
    dispatch({ type: "remo", payload: idParam });
    // setList(newData);
  };

  const dispList = state.dataList.map(function (item) {
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
