const item=[
    {name:'Bike',price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'Book', price:5},
    {name:'Phone', price:500},
    {name:'Computer', price:1000}, 
]


// 1.Filter and show the product that will be bought when 
// you don't have much money I mean Cheap one

function Cheap(items) 
    {
         var cheap = items[0]["price"];
         var cheap_product = ""; 
        for (var i = 0; i < items.length; i++) 
        {
        if (items[i]["price"] < cheap) 
        {
            cheap= items[i]["price"]; 
        cheap_product=items[i]["name"];
        }
        } 
        return cheap_product; 
    }


// 2 . Filter and show the product that will be expensive in the array


function expensive(product) 
    {
         var expensive = product[0]["price"];
         var expensive_product = ""; 
        for (var i = 0; i < product.length; i++) 
        {
        if (product[i]["price"] > expensive) 
        {
            expensive= product[i]["price"]; 
            expensive_product=product[i]["name"];
        }
        } 
        return expensive_product; 
    }


// 3 . Calculate the full price of all product combined
function Totalsum(product)
{
var sum =0 
for (var i = 0; i < product.length; i++) 
{
sum+=product[i]["price"];
}
return sum;
}



// 4 . Calculate the full price of all product combined and remove 
// product that are under the 10 dollar

function sum(product)
{
var sum =0 
for (var i = 0; i < product.length; i++) 
{
    if (product[i]["price"] <10) 
    {
        continue
    }
else    
sum+=product[i]["price"];
}
return sum;
}


console.log("");
console.log("The Output:");
console.log("");
console.log(`Cheap Product: ${Cheap(item)}`);
console.log(`Expensive product: ${expensive(item)}`);
console.log(`Price of all Product: ${Totalsum(item)}`);
console.log(`Total Price except under 10: ${sum(item)}`);


