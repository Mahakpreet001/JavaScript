// Reduce

const mynum = [1,2,3]
// const mytotal = mynum.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval;
// }, 0)


const mytotal = mynum.reduce((acc,currval) => acc+currval, 0)
console.log(mytotal);


const shopppingcart = [
    {
        itemname:'js course',
        price: 699
    },
    {
        itemname: 'python course',
        price: 599
    },
    {
        itemname: 'ruby course',
        price: 499
    },
    {
        itemname: 'cpp course',
        price: 899
    },
    {
        itemname: 'java course',
        price: 799
    }
]

const totalprice = shopppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total price of all items: ${totalprice}`);