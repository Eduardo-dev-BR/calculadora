
    function itemAdd(tipo, valor){
       if(tipo === 'acao'){
            if(valor === 'C'){
                document.getElementById('resultado').value = ''
            }
            if(valor === '+'||valor === '-'||valor === '*'||valor === '/'||valor === '.'){
                document.getElementById('resultado').value += valor
            }
            if(valor === '='){
                var res = eval(document.getElementById('resultado').value)
                document.getElementById('resultado').value = res
            }
       }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
       }
    }