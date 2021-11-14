// const arr = ['a', 'b', 'c', 'd'];
// console.log(arr);

// for Each loop is used for itteration 
//  arr.forEach((item, index) => {
//     console.log(index + ": " + item);
// });

// map
//  const arr2 = arr.map((item, index) =>{
//      console.log(index + ": " + item);
//      return item.toUpperCase();
//  });

//  console.log(arr2);


// filter

// const arr = [2, 5, 7, 1, 3, 9, 4];

// const arr3 = arr.filter((item) => {
//     if(item > 3){
//         return true;
//     }else {
//         return false;
//     }
// });

// console.log(arr3);


// reduce

const cart = [
    {name: "pillow", price: 30, quantity: 4},
     {name: "knife", price: 20, quantity: 5},
     {name: "trimmer", price: 500, quantity: 1},
     {name:" mixer", price: 1000, quantity: 1}
];

const Redarr = cart.reduce((agg, item) => {
      return agg + item.price * item.quantity;
}, 0);

console.log(Redarr);


