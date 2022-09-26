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



let regList = regions.reduce((accumulator, region) => `${accumulator} ${region.name}, `, 'Regions: ');
console.log(regList);

// console.log(regions[id = 1].cities);

