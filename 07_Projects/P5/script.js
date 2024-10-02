const startdisco = document.querySelector('#start')
const stopdisco = document.querySelector('#stop')

let randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
console.log(randomcolor());

let intervalid;

const startchange = function(){

    let disco = function(){
        document.body.style.backgroundColor = randomcolor();
        // document.body.style.transition = 'background-color 1s ease-in-out';
    }
    if(intervalid == null){
        intervalid = setInterval(disco,100)
    }
}

const stopchange = function(){
    clearInterval(intervalid);
    intervalid = null;
    // document.body.style.backgroundColor = 'rgb(50,50,50)';
}

startdisco.addEventListener('click',startchange);
stopdisco.addEventListener('click',stopchange);
