const users = [
    { id: 101, firstName: 'ada', lastName: 'lovelace', role: 'admin', isActive: true, age: 36 },
    { id: 102, firstName: 'grace', lastName: 'hopper', role: 'user', isActive: false, age: 85 },
    { id: 103, firstName: 'margaret', lastName: 'hamilton', role: 'user', isActive: true, age: 85 },
    { id: 104, firstName: 'radia', lastName: 'perlman', role: 'user', isActive: true, age: 71 }
  ];

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