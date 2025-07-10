//scrivi un programma che stampa i numeri da 1 a 100 ma per i multipli di 3 stampi "Fizz";
// per i multipli di 5 stampi "Buzz";
// per i multipli di 3 e 5 stampi "FizzBuzz".





for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
      } else if (i % 3 === 0) {
            console.log("Fizz");
      } else if (i % 5 === 0) {
            console.log("Buzz");
      } else {
            console.log(i);
      }
}

// Questo codice utilizza un ciclo for da 1 a 100
// if per verificare se il numero corrente è un multiplo di 3, 5 o entrambi.
// Se il numero è un multiplo di 3 e 5, stampa "FizzBuzz"
// Se il numero è un multiplo di 3, stampa "Fizz"
// Se il numero è un multiplo di 5, stampa "Buzz"