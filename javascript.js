function CalcMedia(){
        var resp = confirm ("você gostaria de calcular a media do aluno")

if(resp==true){
    
        var aluno = prompt ("Digite o nome do aluno")
      
        var n1 = prompt ("digite a nota da n1")
        var n2 = prompt ("digite a nota da n2")
        var n3 = prompt ("digite a nota da n3")
        var n4 = prompt ("digite a nota da n4")
    
        var media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
        


        if (media>=6){
        window.document.getElementById("resposta").innerText = ("Parabéns " + aluno + " você passou com a média: " + media )
        }else{
                if (media<=5,9)
                window.document.getElementById("resposta").innerText = (aluno + " infelizmente você pegou recuperação com a media: " + media )
        }  

        }else{
                var msg = "Você nao quer calcular a nota"
                window.document.getElementById("resposta").innerText = msg
        }
       }

