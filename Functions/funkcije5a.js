// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program pokrene.
    function getQuote(quot, auth) {
        var i = Math.floor(Math.random() * quot.length);
        console.log(quot[i] + "\n by " + auth[i]);
      }
      getQuote(
        ["Citat 1", "Citat 2", "Citat 3", "Citat 4", "Citat 5", "Citat 6"],
        ["Autor 1", "Autor 2", "Autor 3", "Autor 4", "Autor 5", "Autor 6"]
      );
// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je prestupna.
// Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako nije deljiva sa 100 - 1900. nije bila prestupna).
// Od toga odstupa svaka četvrta godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je prestupna).
      function isPrestupna(year) {
        var result = "";
        if (year % 4 === 0 && year % 100 !== 0) {
          result = year + " IS prestupna!";
        } else if (year % 400 === 0) {
          result = year + " IS prestupna!";
        } else {
          result = year + " is NOT prestupna!";
        }
        console.log(result);
      }
      isPrestupna(2000);
      isPrestupna(1900);
// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.
      function calcGlasnik(str) {
        var sam = 0;
        var sug = 0;
        var strUp = str.toUpperCase();
        for (var i = 0; i < str.length; i++) {
          if (
            strUp[i] === "A" ||
            strUp[i] === "E" ||
            strUp[i] === "I" ||
            strUp[i] === "O" ||
            strUp[i] === "U"
          ) {
            sam++;
          } else {
            sug++;
          }
        }
        console.log("Samoglasnika: " + sam + "\nSuglasnika: " + sug);
      }
      calcGlasnik("Rec ili recenica");
// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
      function printType(arr) {
        var types = [];
        for (var i = 0; i < arr.length; i++) {
          types[i] = typeof arr[i];
        }
        console.log(types);
      }
      printType(["M", "Anne", 12, 0, false, "John", "David", "Mark", true, "A"]);
// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] => rezultat [“pp”].
      
function printNumberless(arr) {
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j]);
            if (isNaN(arr[i][j]) && arr[i][j] === " ") {
              console.log(arr[i]);
            } else {
            }
          }
        }
      }
      printNumberless(["12bb", "pp", "as23s", "00sd"]);
// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter,
// središnji karakter ako string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran broj znakova,
// indeks drugog ponavljanja drugog karaktera u formatu "@ Index #" ili "not found" ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] ,
// Primer 2: “Science" => [7, "S", "e", "e", "@ index 5"]
      function printSomething(str) {
        var result = [str.length, str[0], str[str.length - 1]];
        if (str.length % 2 === 0) {
          result[3] = str[str.length / 2 - 1] + str[str.length / 2];
        } else {
          result[3] = str[Math.floor(str.length / 2)];
        }
        if (1 === str.lastIndexOf(str[1])) {
          result.push("Not found");
        } else {
          result.push("@ index " + str.lastIndexOf(str[1]));
        }
        console.log(result);
      }
      printSomething("Science");
// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.
      function printNoRepeated(arr) {
        var result = arr.filter(function (el) {
          return arr.indexOf(el) === arr.lastIndexOf(el);
        });
        console.log(result);
      }
      printNoRepeated([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);
// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]
      function splitArr(arr, n) {
        var arr1 = [];
        var arr2 = [];
        var arr2I = 0;
        for (var i = 0; i < n; i++) {
          arr1[i] = arr[i];
        }
        for (var j = n; j < arr.length; j++) {
          arr2[arr2I] = arr[j];
          arr2I++;
        }
        console.log(arr1, arr2);
      }
      splitArr([2, 3, 4, 5, 6], 3);