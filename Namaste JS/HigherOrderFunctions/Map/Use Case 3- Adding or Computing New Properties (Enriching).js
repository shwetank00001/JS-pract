const users = [
    { id: 101, firstName: 'ada', lastName: 'lovelace', role: 'admin', isActive: true, age: 36 },
    { id: 102, firstName: 'grace', lastName: 'hopper', role: 'user', isActive: false, age: 85 },
    { id: 103, firstName: 'margaret', lastName: 'hamilton', role: 'user', isActive: true, age: 85 },
    { id: 104, firstName: 'radia', lastName: 'perlman', role: 'user', isActive: true, age: 71 }
  ];


//   The Dev Task: "I need the full user object, but I also want to add a new isVintage property if the user is over 75 years old. And I want to capitalize their names for display."
// The Idea: We want to keep all the original data but add more. This is a perfect use for the spread syntax (...) to create a copy and then add/overwrite properties.


let isVintage;

const newProperty = users.map(function(item){
    if(item.age > 75){
        return {
            ...item,
            firstName: item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1),
            isVintage: true,
        }
    }
    else return {
        ...item,
        isVintage:false
    }
});

console.log(newProperty)