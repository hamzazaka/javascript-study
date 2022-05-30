

console.log('hello world');

// FUNCTIONS

const greet=()=>{
    console.log('hello world');
}



const curry=(a)=>{
  return (b)=>{
      return (c)=>{
          return a+b+c
      }
  }
}

console.log(curry(2)(3));