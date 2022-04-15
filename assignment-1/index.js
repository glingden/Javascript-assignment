
// Function to create a promise
function createPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 5000);
  });
}


// Create asynchromous action
async function prinNumber() {
  
  let i = 1,  c = 1000;
  console.log('Number printing .....');

  while(i <= 1000000){
    console.log(i)

    // Set timeout after each 1000 numbers
    if( i == c){
      await createPromise(); // pause
      c +=1000;
    }
    i++;
        
  }
  
}

prinNumber();

/* 
//using setinterval
let i = 1
var interval = setInterval(function(){ 
  console.log(i); 
  i = i+1;
  if(i==1000000){
    clearInterval(interval);
  }
}, 100);

*/
