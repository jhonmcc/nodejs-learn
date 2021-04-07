// normal function
function msg(){
    console.log("msg da function")
}
msg()

// arrow function
const funcArrow = () => console.log('msg da arrow function')
funcArrow()

// normal function with return
function msgReturn(){
    return "retorno do msgReturn"
}
console.log(msgReturn())

// arrow function with return 
const arrowFuncReturn = () => {
    return "retorno do arrowFuncReturn"
}
console.log(arrowFuncReturn())