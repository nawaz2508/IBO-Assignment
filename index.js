
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

let prodObj = {};
let getUniqueProductCount = () => {
    
    for (let i = 0; i < listOfProducts.length; i++) {
        if (!prodObj[listOfProducts[i].productName]) {
            prodObj[listOfProducts[i].productName] = 1;
        } else prodObj[listOfProducts[i].productName]++;
      };
      return JSON.stringify(prodObj);
    }
    document.getElementById("uniqueProduct").innerHTML=`Get Unique Product ${getUniqueProductCount()}`;

console.log(JSON.stringify(prodObj));



// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ];

let list=[];
let getUniquePrducts =()=>{
    
    for (let i = 0; i < listOfProducts.length; i++) {
    let flag=true;
            for(let j=0;j<list.length;j++){
            
                    if(listOfProducts[i].productName==list[j].productName){
                        list[j].quantity+=listOfProducts[i].quantity;
                        flag=false;
                       }
                    }
                    if(flag===true){
                    list.push(listOfProducts[i]);
                    }
        }
        return JSON.stringify(list);
        
        };

        document.getElementById("uniqueQnty").innerHTML=`${getUniquePrducts()}`;
        
        // console.log(list);
      
    

    
    

console.log(JSON.stringify(list));





