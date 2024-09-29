const form = document.querySelector('form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    
    if(height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = 'Please give valid height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ){
        result.innerHTML = 'Please give valid weight';
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let color;
        if (bmi < 18.6) {
            color = 'yellow';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            color = 'lightgreen';
        } else {
            color = 'lightcoral';
        }
        result.innerHTML = `Your BMI is: ${bmi}`;
        result.style.color = color;
    }
})