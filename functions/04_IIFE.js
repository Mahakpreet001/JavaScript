// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    // named IIFE
    console.log('DB connected');   
})();                                     //we have to add ; to the end of the first iife so that second can run

( (name)=> {
    console.log(`DB connected two ${name}`);
} )('mahak')