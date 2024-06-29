function mostrar(){
    for(let i=0;i<10;i++){
        resultado = ""
        for(let j=1;j<i;j++){
            reultado += "*"
        }
        console.log(resultado)
    }
}

module.exports = mostrar()


