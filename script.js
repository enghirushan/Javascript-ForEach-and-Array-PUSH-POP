let hobbies = ["Music" , "Sports" , "Reading"];
console.log(hobbies);

//when it is in pop method, it will remove the last element, 
let element = hobbies.pop()
console.log( "rempve element is ==>" , element  );


//when it is in PUSH
let Nelement = hobbies.push("writting");
console.log(  Nelement); 

//when it is in shift method, it will remove the first element,
let Shiftelement = hobbies.shift();
console.log(Shiftelement);


//ForEach has showen the list of array elemts
let Drinks=[];
Drinks.push("Coffee" , "Tea" , "Milk");

Drinks.forEach(drink => {
  console.log(drink)
});
