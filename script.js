const calculateTip = document.querySelector('.form-calculator');

calculateTip.addEventListener('submit', getTip);

function getTip(e) {
    console.log('calculating...');

    const amount = document.querySelector('.amount');
    const interest = document.querySelector('.interest');
    const server = document.querySelector('.servers');
    const realResult = document.querySelector('.result');

    const realAmount = amount.value;
    
    const realInterest = interest.value/100;
    
    const realServers = server.value;
  
    realResult.value = realAmount * realInterest/realServers;

    if(realAmount === '' || realServers === '' ||    realInterest === '' ) {

         errorDisplay();

    }else {
        setTimeout(function() {
            document.querySelector('.loading-image').style.display = 'block';
        
            document.querySelector('.tip-result').style.display = 'none';
        
        })
        
        setTimeout(function() {
            document.querySelector('.tip-result').style.display = 'block';
        
            document.querySelector('.loading-image').style.display = 'none';
        
           
        
        }, 3000);
    
    }

    e.preventDefault();

}


function errorDisplay() {
    const error = document.createElement('div');
    const form = document.querySelector('.form-calculator');

    const head = document.querySelector('.header');

    error.className = 'error-div';
    error.appendChild(document.createTextNode('Please enter digit in missing field'));

    error.style.color = 'red';
    error.style.background = 'black'
    error.style.textAlign = 'center'

    form.insertBefore(error, head);

   

    setTimeout(errorDisplayRemove, 3000)



}

function errorDisplayRemove() {
    document.querySelector('.error-div').remove();
}







