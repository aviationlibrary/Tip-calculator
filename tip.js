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
 

    amount.value = '';
    server.value = '';
    interest.value = '';

    e.preventDefault();

}


