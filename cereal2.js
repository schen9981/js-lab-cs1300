// TODO: create Cereal class with fields 'name', 'count', 'img' -- must be in this order!

// lines 4-8 creates the cereal instances and the cereal array
let frostedFlakes = new Cereal("Frosted Flakes", 0, "frostedFlakes.jpg");
let luckyCharms = new Cereal("Lucky Charms", 0, "luckyCharms.png");
let captainCrunch = new Cereal("Captain Crunch", 0, "capnCrunch.png");

let cerealArray = [frostedFlakes, luckyCharms, captainCrunch];

// this function is the same as the changeCerealName function from exercise 1,
// but instead, it takes in a Cereal instance and sets the name using the 'name'
// field.
function changeCerealName(cereal) {
  document.getElementById('cereal-name').innerHTML = cereal.name;
}

// this function is the same as the changeCerealImg function from exercise 1,
// but instead, it takes in a Cereal instance and sets the img using the 'img'
// field.
function changeCerealImg(cereal) {
  document.getElementById('cereal-img').src = cereal.img;
}

// IMPORTANT: this function also takes in a Cereal instance!
function incrementCerealCount(cereal) {
  // TODO: create 3 if statements, checking if the cereal name is "Frosted Flakes",
  // "Lucky Charms", or "Captain Crunch".
  // hint: you can access the name of the cereal using cereal.name


  // TODO: inside each if statement, grab the td element with the corresponding id
  // and set the contents (the cereal count) to the current cereal count + 1.
  // Reference the html file to get the id! For example, the id that corresponds to "Frosted Flakes"
  // is 'ff-count'.
  // hint: you can access the current cereal count using cereal.count


  // TODO: increment the cereal count of the current instance.

}

// TODO: write the function changeCereal() USING ES6 SYNTAX. This function should do the following: 
// (1) generate a random index, which you will use to chose a cereal from the cereal array. 
//     you can do this with the following line of code:
//     let ind = Math.floor(Math.random() * 3);
// (2) get the cereal object from the cereal array using the index 'ind' generated above
// (3) call the appropriate functions (there should be 3!) to change the cereal name, image, and cereal counts
