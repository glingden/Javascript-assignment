// Your code here


// Function to create a promise
function createPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 100);
  });
}


// Create asynchromous action
async function prinNumber() {
  let i = 1;
  console.log('Number printing .....');
  while(i <= 1000000){
    const result = await createPromise(); // pause
    console.log(i); // print number
    i++;

  }
  
}

prinNumber();
