const gymEx = [
    {
        chest : ["Upper", "Middle", "Lower"]
    },
    {
        back : ["Lats", "Traps", "Middle"]
    }
]

const list = gymEx.map(function(item){
    return item.chest
})
console.log(list);
