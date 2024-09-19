const myobject={
    js:'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myobject) {
//     console.log(key);                                                     //only print the keys
//     console.log(myobject[key]);                                           //only print the values
//     console.log(`${key} is shortcut for  ${myobject[key]}`);              //print both key and value with the use of backtick
// }


const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//     console.log(key);                                       //this will print the key which is 0 1 2 3 4
//     console.log(programming[key]);                              //this will print the value of the key 
// }

const map = new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('UK','United Kingdom')

for (const key in map) {
    console.log(key);
}