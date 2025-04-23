import React from "react";

const Debounce = () => {
  const getSearchData = () => {
    console.log("Searched Data here");
  };

  // React.useEffect(() => {
  //     getSearchData()
  // }, [])

  const debouncedFn = debouncedData(getSearchData, 500);

  function debouncedData(apiFn, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        apiFn();
      }, delay);
    };
  }
  return (
    <>
      <h1>Debounce in react</h1>
      <input onKeyPress={debouncedFn} />
    </>
  );
};

export default Debounce;
