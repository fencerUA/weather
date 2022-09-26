// let cities = [
//     Europe: {[
//        "Berlin","Paris","London","Madrid", "Vienna", "Brussels","Moscow",""
//     ]},
    
// ];

let regions = [
    {name:"Europe", cities: ["Berlin","Paris","London","Madrid", "Vienna", "Brussels","Moscow"]},
    {name:"America", cities: ["Washington","New York","Chicago"]},
    {name:"Asia", cities: ["Kabul","Dhaka","Peking"]},
    {name:"Africa", cities: ["Algiers","Luanda","Cairo"]},
    {name:"Oceanic", cities: ["Canberra","Wellington"]}
];

for(let i=0;i <regions.concat.length;i++){
    let regionName = regions[i].name;
    let cities = regions[i].cities;
    console.log(regionName);
    for(let y = 0;y <cities.length;y++){
        console.log(cities[y]);
    }
    
}





