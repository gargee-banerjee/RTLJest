function sum(a,b){
    return a + b;
}

// module.exports=sum

function myFn(input){
    if(typeof input !== 'number')
    throw new Error("Not a number")
}
// module.exports=myFn

function fetechData(action){
    setTimeout(()=>{
        action('peanut Butter')
    },1000)
}
// module.exports=fetechData

function fetchPromiseData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('yay mango'),50)
        // setTimeout(()=>reject('yay mango'),50)
    })
}

module.exports= fetchPromiseData;