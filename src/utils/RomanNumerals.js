// Tabela para mapeamento dos números romanos
const table = {
  1 : 
  [
      '',     // 0 => 0
      'I',    // 1 => 1
      'II',   // 2 => 2
      'III',  // 3 => 3
      'IV',   // 4 => 4
      'V',    // 5 => 5
      'VI',   // 6 => 6
      'VII',  // 7 => 7
      'VIII', // 8 => 8
      'IX',   // 9 => 9
  ],
  2 : 
  [
      '',     // 0 =>
      'X',    // 1 => 10
      'XX',   // 2 => 20
      'XXX',  // 3 => 30
      'XL',   // 4 => 40
      'L',    // 5 => 50
      'LX',   // 6 => 60
      'LXX',  // 7 => 70
      'LXXX', // 8 => 80
      'XC',   // 9 => 90
  ],
  3 : 
  [
      '',     // 0 =>
      'C',    // 1 => 100
      'CC',   // 2 => 200
      'CCC',  // 3 => 300				
      'CD',   // 4 => 400
      'D',    // 5 => 500
      'DC',   // 6 => 600
      'DCC',  // 7 => 700
      'DCCC', // 8 => 800
      'CM',   // 9 => 900
  ],
  4 : 
  [
      '',    // 0 => 
      'M',   // 1 => 1000
      'MM',  // 2 => 2000
      'MMM', // 3 => 3000
  ]
};

function convertToRoman (input) {
    // Looping de remoção dos caracteres não aceitos
    const value = input.toString();
    var current = '';

    for (var i = 0; i <= value.length; i++)
        current += value.charAt(i).replace(/[^0-9]/, '');

    if (parseInt(current) > 3999)
        return "Valor maximo aceito é '3999'";

    if (current == '') 
        return "Favor informar um número válido";
    
    // Looping de busca pelo número correspondente em romano 
    var result = '';

    for (var i = current.length; i >= 1 ; i--) {
        var j = current.length - i;
        var auxVar = parseInt(current.charAt(j));
        result += table[i][auxVar];
    }

    return result;
};

module.exports.convertToRoman = convertToRoman;