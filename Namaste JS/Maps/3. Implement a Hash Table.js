const newHashMap = new Map();

newHashMap.set("Name", "Shwetank");
newHashMap.set("Age", 26);
newHashMap.set("Company", "Welocalize");
newHashMap.set("City", "Gurgaon");

console.log(newHashMap.get("City"));


for (let [key, value] of newHashMap){
    console.log(`${key}:${value}`)
}