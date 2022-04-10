//factory function que retorna o objeto
function criaCalculadora() {
    //pode ser criado coisas aqui para nao se meter com o escopo de fora
    
    return {
        display: document.querySelector(".display"),
        //colocando o display no atributo do objeto
        inicia() {
          this.cliqueBotoes();
          this.pressionaEnter();
        },

        pressionaEnter(){
            document.addEventListener('keypress', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },
        
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Erro')
                }

            }catch (e){
                alert("Erro");
            }

            this.display.value = conta
        },

        clearDisplay() {
            this.display.value = "";
        },
        //aqui foi utilizado slice para excluir o  ultimo valor (indice, retirando o -1 que é o ultimo)
        apagaUm(){
        this.display.value = this.display.value.slice(0,-1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains('btn-eq')){
            this.realizaConta();
        }

      });
    },

    btnParaDisplay(value) {
      this.display.value += value;
    },
    
  };
}

const calculadora = criaCalculadora();

calculadora.inicia();
