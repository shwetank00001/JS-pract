async function get() {
  return "hi";
}

const p = get();

console.log(p);

p.then((res) => {
  console.log(res);
});

const data = await p;
console.log(data);
// These are the three ways to get a data from promise>
// ALl Apis return a promise.
