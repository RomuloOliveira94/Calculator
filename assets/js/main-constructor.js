//calculadora refatorada para função construtora

function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.enterConta();
  };

  this.display.focus()

  this.enterConta = () => this.display.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) this.contaDisplay()
  });

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.deleteDisplay();
      if (el.classList.contains("btn-eq")) this.contaDisplay();
    });
  };

  (this.contaDisplay = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Erro");
      }
    } catch (e) {
      alert("Erro");
    }

    this.display.value = conta;
  }),
    (this.clearDisplay = () => (this.display.value = ""));

  this.deleteDisplay = () =>
    (this.display.value = this.display.value.slice(0, -1));

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus()
  };
}

const calculadora = new Calculadora();

calculadora.inicia();
