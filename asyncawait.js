function makeOrder(coffee) {
  return new Promise((resolve, reject) => {
    console.log("Making request for " + coffee);
    if (coffee == "Black Coffee")
      resolve("Here is Your Coffee, Have a nice day");
    else reject("Sorry! We serve only Black Coffee");
  });
}

function processOrder(order) {
  return new Promise((resolve, reject) => {
    console.log("Processing Order");
    resolve("Extra Information : " + order);
  });
}

/*
makeOrder("Black Coffee").then((data) =>{
    console.log("Hey there! Your order has been received.")
    return processOrder(data)
}).then((processedOrder) => {
    console.log(processedOrder)
}).catch(error =>{
    console.log(error);
})
*/

console.log("--------------------------------");

const asfun = async () => {
  try {
    const mo = await makeOrder("Black Coffee");
    console.log("Hey there! Your order has been received.");
    const pr = await processOrder(mo);
    console.log(pr);
  } catch (error) {
    console.log(error);
  }
};
asfun();
