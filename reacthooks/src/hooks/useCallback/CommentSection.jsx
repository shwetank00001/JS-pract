import React from "react";

function CommentSection() {
  const [data, setData] = React.useState();
  const [dataList, setList] = React.useState([]);

  function handleSub(e) {
    e.preventDefault();
    const newData = {
      id: new Date().getTime(),
      value: data,
    };
    setList(newData);
    console.log(dataList);
  }

  console.log(dataList);

  // const eleList = dataList.map(function (item) {
  //   return (
  //     <div>
  //       <h1>{item.value}</h1>
  //     </div>
  //   );
  // });

  return (
    <div>
      <form onSubmit={handleSub}>
        <input
          placeholder="add your comment.."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {/* {eleList} */}
    </div>
  );
}

export default CommentSection;
