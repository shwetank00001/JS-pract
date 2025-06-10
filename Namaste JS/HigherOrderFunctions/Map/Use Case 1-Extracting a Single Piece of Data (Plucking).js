const users = [
    { id: 101, firstName: 'ada', lastName: 'lovelace', role: 'admin', isActive: true, age: 36 },
    { id: 102, firstName: 'grace', lastName: 'hopper', role: 'user', isActive: false, age: 85 },
    { id: 103, firstName: 'margaret', lastName: 'hamilton', role: 'user', isActive: true, age: 85 },
    { id: 104, firstName: 'radia', lastName: 'perlman', role: 'user', isActive: true, age: 71 }
  ];


// This is the "hello world" of mapping over objects.
// The Dev Task: "I need to populate a dropdown menu with just the first names of all users."
// The Idea: We don't need the whole user object for the dropdown. 
//We need a simple array of strings.
//  So for each user object, we will "pluck" out the firstName property and return it.

const fNames = users.map(function(item){
    return item.firstName
})

console.log(fNames)