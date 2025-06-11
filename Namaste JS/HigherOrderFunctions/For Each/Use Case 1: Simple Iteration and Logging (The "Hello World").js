const users = [
    { id: 101, firstName: 'ada', lastName: 'lovelace', role: 'admin', isActive: true, age: 36 },
    { id: 102, firstName: 'grace', lastName: 'hopper', role: 'user', isActive: false, age: 85 },
    { id: 103, firstName: 'margaret', lastName: 'hamilton', role: 'user', isActive: true, age: 85 }
  ];



  users.forEach(function(item){
    return `Hi this is ${item.firstName} and the age is ${item.age}`
  })