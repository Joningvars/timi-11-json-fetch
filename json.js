const rettur = [{
    nafn: "Plokkfiskur",
    verd: 2890,
    vegan: false,
    ofnaemi: ["fiskur","mjolk"],
    
},{
    nafn: "Plokkfiskur",
    verd: 2890,
    vegan: false,
    ofnaemi: ["fiskur","mjolk"]
}];

const rettur2 = {"nafn":"Plokkfiskur","verd":2890,"vegan":false,"ofnaemi":["fiskur","mjólk"]};

const jsonTexti = '{"nafn":"Plokkfiskur","verd":2890,"vegan":false,"ofnaemi":["fiskur","mjólk"]}';

console.log(typeof rettur);
console.log(typeof rettur2);
console.log(typeof jsonTexti);

console.log(rettur.verd);

const semJson = JSON.stringify(rettur);
console.log(semJson);
console.log(typeof(semJson));
const aftur = JSON.parse(semJson);
console.log(aftur);
console.table(aftur);

try {
    JSON.parse("{nafn: 'Plokkfiskur'}");
} catch (error) {
    console.log("Úbbsídeisí eitthvað fór úrskeiðis....");
}