const name = "Mahak"
const repocount = 50

// console.log(name+repocount);

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const moviename = new String ('Tabha_Parmish_Verma')

console.log(moviename[0]);
// console.log(moviename.__proto__);

console.log(moviename.length);
console.log(moviename.toUpperCase());

console.log(moviename.charAt(2));
console.log(moviename.indexOf('h'));

const newstring = moviename.substring(0,4)

console.log(newstring);

const otherstring = moviename.slice(-13,13)
console.log(otherstring);

const spacename = "   Mahak   "
console.log(spacename);
console.log(spacename.trim());                             //trim cut extra space

const url = "https://google.com/maggi%20masala"
console.log(url.replace('%20','-'));                       //replace word in link

console.log(url.includes('maggi'));                        //find word in the link

console.log(moviename.split('_'));                         //split on the basis of a word
