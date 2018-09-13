## Protótipo 
O construtor de protótipo permite adicionar novas propriedades e métodos ao objeto Date().
Ao construir uma propriedade, TODOS os objetos de data receberão a propriedade e seu valor, como padrão.Ao construir um método, TODOS os objetos de data terão esse método disponível.
Permite adicionar propriedades e métodos a um objeto:

    Date.prototype.myMet = function() {
      if (this.getMonth() == 0){this.myProp = "Janeiro"};
      if (this.getMonth() == 1){this.myProp = "Fevereiro"};
      if (this.getMonth() == 2){this.myProp = "Março"};
      if (this.getMonth() == 3){this.myProp = "Abril"};
      if (this.getMonth() == 4){this.myProp = "Maio"};
      if (this.getMonth() == 5){this.myProp = "Junho"};
      if (this.getMonth() == 6){this.myProp = "Julho"};
      if (this.getMonth() == 7){this.myProp = "Agosto"};
      if (this.getMonth() == 8){this.myProp = "Setembro"};
      if (this.getMonth() == 9){this.myProp = "Outubro"};
      if (this.getMonth() == 10){this.myProp = "Novembro"};
      if (this.getMonth() == 11){this.myProp = "Dezembro"};
    };

    function myFunction() {
      var data = new Date();
      data.myMet();
      console.log(data);
    }
    
## now()
Retorna o número de milissegundos desde a meia-noite de 1º de janeiro de 1970:

    var mil = Date.now();
    console.log(mil);

## parse()
Analisa uma string de data e retorna o número de milissegundos desde 1º de janeiro de 1970:

    var data = Date.parse("September 03, 2018");
    console.log(data);    // retorna 1535943600000
    
## toDateString()
Converte a parte da data de um objeto Date em uma string legível:

    var data = new Date();
    var strg = data.toDateString();
    console.log(strg);    // retorna a data atual como string - Mon Sep 03 2018
    
## toISOString()
Retorna a data como uma string, usando o padrão ISO:

    var data = new Date();
    var strg = data.toISOString();
    console.log(strg);    // retorna 
    
## toJSON()
Retorna a data como uma string, formatada como uma data JSON:

    var data = new Date();
    var json = data.toJSON();     // retorna 

## toLocaleDateString()
Retorna a parte da data de um objeto Date como uma string, usando convenções de localidade:

    var data = new Date();
    var strg = data.toLocaleDateString();
    console.log(strg);    // retorna a data atual como uma string - 03/09/2018

## toLocaleTimeString()
Retorna a parte da hora de um objeto Date como uma string, usando convenções de localidade:

    var data = new Date();
    var strg = data.toLocaleTimeString();
    console.log(strg)     // retorna a data atual como uma string

## toLocaleString()
Converte um objeto Date em uma string, usando convenções de localidade:

    var data = new Date();
    var strg = data.toLocaleString();
    console.log(strg);    // retorna a data atual como uma string

## toString()
Converte um objeto Date em uma string:

    var data = new Date();
    var strg = data.toString();
    console.log(strg);    // retorna Mon Sep 03 2018 15:46:42 GMT-0300 (Horário Padrão de Brasília)
    
## toTimeString()
Converte a parte de hora de um objeto Date em uma string:

    var data = new Date();
    var strg = data.toTimeString();
    console.log(strg);     retorna 15:48:41 GMT-0300 (Horário Padrão de Brasília)
    
## toUTCString()
Converte um objeto Date em uma string, de acordo com a hora universal:

    var data = new Date();
    var strg = data.toUTCString();
    console.log(strg);    // retorna Mon, 03 Sep 2018 18:51:06 GMT
    
## UTC()
Retorna o número de milissegundos em uma data desde a meia-noite de 1º de janeiro de 1970, de acordo com a hora UTC:

    var data = Date.UTC(2018, 08, 03);
    console.log(data);    // retorna 1535932800000
    
## valueOf()
Retorna o valor primitivo de um objeto Date:

    var data = new Date(); 
    var valor = d.valueOf();