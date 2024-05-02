Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

   Ricordate: non potete utilizzare metodi built-in (già disponibili) degli array.

   Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione degli esercizi in linguaggio naturale!
   Buon lavoro e buon divertimento!

   1 - creo una variabile (userNumber)che genera 1 numero random da 1 a 6 (giocatore)
   2 - creo una variabile (pcNumber) che genera 1 numero random da 1 a 6 (computer)
   3 - creo un array con 6 numeri
   4 - uso il contatore dell'array come termine di paragone:

   - se userNumber == contatore e pcNumber == contatore --> pari
   - se userNumber == contatore e pcNumber > contatore --> vince pc
   - se userNumber == contatore e pcNumber < contatore --> vince
     giocatore
