   // function solicitando numero ao usuario
   var numero = () => parseInt(prompt('Digite um número: '));

   // function verifica se são multiplos
   var verificaMultiplos = (num1, num2) => {
       if (num1 % num2 === 0 || num2 % num1 === 0) {
           return true;
       } else {
           return false;
       }
   };

   // function mostra resultado 
   var resultado = () => {
       var num1 = numero();
       var num2 = numero();
       var saoMultiplos = verificaMultiplos(num1, num2);
       if (saoMultiplos) {
           alert('São múltiplos!');
       } else {
           alert('Não são múltiplos!');
       }
   };

   resultado();