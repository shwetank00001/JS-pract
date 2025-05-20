import { useRef, useEffect } from "react";

export default function Refhook() {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  console.log("COmponent Re rendered");
  return (
    <form onSubmit={handleSubmit}>
      <p>testing smthing on refs</p>
      <input type="text" ref={inputRef} />
      <button type="submit">Test </button>
    </form>
  );
}
