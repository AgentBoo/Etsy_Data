// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
const n = data.length;

// forloop to go through all items in array and add all prices together: s = s + {price of each item}
function sum(){
  let s = 0;
  for (let i = 0; i < n; i++){
    s += data[i].price;
  }
  return s;
}

// round the number to two decimal places
function round(averagePrice){
  return Number((averagePrice).toFixed(2));
  // also:
  // Number(Math.round((x)+'e2')+'e-2') is eq to Number((x).toFixed(2))
}

function question1 () {
  const averagePrice = sum()/n;
  console.log("The average price is $" + round(averagePrice));
  return averagePrice;
  }


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let arrayItems = [];
  for (let i = 0; i < n; i++){
    if (data[i].price <= 18.00 && data[i].price >= 14.00){
      console.log(data[i].title);
      arrayItems.push(data[i].title);
    }
  } return arrayItems;
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i = 0; i < n; i++){
    if (data[i].currency_code == "GBP"){
      console.log(`${data[i].title} costs ${data[i].price} pounds.`);
    }
  }
}


// 4: Display a list of all items which are made of wood.

// "materials" is an array in the "data" array, so forloop through data, then forloop through materials
function question4 () {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < data[i].materials.length; j++){
      if (data[i].materials[j] == "wood"){
        console.log(`${data[i].title} is made of wood`);
      }
    }
  }
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

// forloop through "data", find "materials", and check for the length of the array
// return if array.length >= 8;
// forloop through "materials" @ array.length >= 8 and return every item
function question5 () {
  for (let i = 0; i < n; i++){
    let m = data[i].materials.length;
    if (m >= 8){
      console.log(`${data[i].title} has ${m} materials`);
      for (let j = 0; j < data[i].materials.length; j++){
        console.log(`- ${data[i].materials[j]}`);
      }
    }
  }
}


// 6: How many items were made by their sellers?

// "who_made": "someone_else" or "i_did" => go through array and check for i_did
// set counter to increment by one if i_did is found: c = c + 1
function question6 () {
  let c = 0;
  for (let i = 0; i < n; i++){
    if (data[i].who_made == "i_did"){
      c += 1;
    }
  } console.log(`${c} items were made by their sellers`)
    return c;
}
