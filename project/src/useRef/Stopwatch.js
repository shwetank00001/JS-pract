import React from "react";

const Stopwatch = () => {
  const stopRef = React.useRef(0);
  const [active, setActive] = React.useState(true);

  // React.useEffect(() => {
  //   while (active) {
  //     for(let i = 0; i<)
  //   }
  // });

  function sub() {
    stopRef.current = stopRef.current - 1;
  }

  return (
    <div>
      <h3>Stopwatch </h3>
      <button>+</button>
      <h3>{stopRef.current}</h3>
      <button onClick={sub}>-</button>
    </div>
  );
};

export default Stopwatch;
