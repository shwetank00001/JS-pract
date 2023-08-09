const a =["hello"];

for (let i = 0; i < a.length; i++) {
    const value = a[i];
    if (typeof value === 'string') {
      console.log("It is a string");
    } else if (Array.isArray(value)) {
      console.log("It is an array");
    } else {
      console.log("null");
    }
  }