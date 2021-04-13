const calcPar = (num) => new Promise((resolve, reject) => {
    if (num % 2 == 0){
        resolve('par')
    }else{
        reject('impar')
    }
})


async function adivinharParImpar(num){
    try {
      res = await calcPar(num)  
      console.log(res)
    } catch (error) {
        console.log(error)
    }
}

adivinharParImpar(2)
adivinharParImpar(3)
console.log('Rodando a promise usando async await')