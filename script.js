var mensaje = {
  enClaro: [],
  secreto: []
};

var tablaEscritura = {
  "a": "GCU",
  "c": "UGU",
  "d": "GAU",
  "e": "GAA",
  "f": "UUU",
  "g": "GGU",
  "h": "CAU",
  "i": "AUU",
  "k": "AAA",
  "l": "UUA",
  "m": "AUG",
  "n": "AAU",
  "p": "CCU",
  "q": "CAA",
  "r": "CGU",
  "s": "AGU",
  "t": "ACU",
  "v": "GUU",
  "w": "UGG",
  "y": "UAU"
};

var tablaLectura = {
  "GCU": "a",
  "UGU": "c",
  "GAU": "d",
  "GAA": "e",
  "UUU": "f",
  "GGU": "g",
  "CAU": "h",
  "AUU": "i",
  "AAA": "k",
  "UUA": "l",
  "AUG": "m",
  "AAU": "n",
  "CCU": "p",
  "CAA": "q",
  "CGU": "r",
  "AGU": "s",
  "ACU": "t",
  "GUU": "v",
  "UGG": "w",
  "UAU": "y"
};

// Mi rutina para eliminar acentos fue adaptada de
// https://stackoverflow.com/posts/29287533/revisions
var tablaTildes = {
  '\u00E0': 'a',   // à => a
  '\u00E1': 'a',   // á => a
  '\u00E2': 'a',   // â => a
  '\u00E3': 'a',   // ã => a
  '\u00E4': 'a',   // ä => a
  '\u00E5': 'a',   // å => a
  '\u00E6': 'ae', // æ => ae
  '\u00E7': 'c',   // ç => c
  '\u00E8': 'e',   // è => e
  '\u00E9': 'e',   // é => e
  '\u00EA': 'e',   // ê => e
  '\u00EB': 'e',   // ë => e
  '\u00EC': 'i',   // ì => i
  '\u00ED': 'i',   // í => i
  '\u00EE': 'i',   // î => i
  '\u00EF': 'i',   // ï => i
  '\u0133': 'ij', // ĳ => ij
  '\u00F0': 'd',   // ð => d
  '\u00F1': 'n',   // ñ => n
  '\u00F2': 'o',   // ò => o
  '\u00F3': 'o',   // ó => o
  '\u00F4': 'o',   // ô => o
  '\u00F5': 'o',   // õ => o
  '\u00F6': 'o',   // ö => o
  '\u00F8': 'o',   // ø => o
  '\u0153': 'oe', // œ => oe
  '\u00DF': 'ss', // ß => ss
  '\u00FE': 'th', // þ => th
  '\u00F9': 'u',   // ù => u
  '\u00FA': 'u',   // ú => u
  '\u00FB': 'u',   // û => u
  '\u00FC': 'u',   // ü => u
  '\u00FD': 'y',   // ý => y
  '\u00FF': 'y',   // ÿ => y
};


var handlers = {
  borraVariables: function() {
    mensaje.enClaro = [];
    mensaje.secreto = [];
  },
  escribir: function() {
    mensaje.enClaro = [];
    mensaje.secreto = [];
    var texto = document.getElementById('mensaje').value;                 // coge el texto de entrada del usuario
    var textoEnMinusculas = texto.toLowerCase();                          // lo convierte a minúsculas
    var textoSinTildes = handlers.quitarTildes(textoEnMinusculas);        // quita las tildes
    mensaje.enClaro = textoSinTildes.split("");                           // crear una matriz con cada letra en una posición
    
    // el bloque a continuación sustitue cada letra por su correspondiente codon genético
    for (var i = 0; i < mensaje.enClaro.length; i++) {
      if ( tablaEscritura[mensaje.enClaro[i]] ) {
        mensaje.secreto[i] = tablaEscritura[mensaje.enClaro[i]];
      } else {
        mensaje.secreto[i] = mensaje.enClaro[i];
      }
    }
    document.getElementById('mensaje').value = "";
    document.getElementById('mensaje').focus();
    mensaje.enClaro = mensaje.enClaro.join("");
    mensaje.secreto = mensaje.secreto.join("");
    view.mostrarSecreto();
  },
  leer: function() {
    mensaje.enClaro = [];
    mensaje.secreto = [];
    var texto = document.getElementById('mensaje').value;   // coge el texto de entrada del usuario
    for (var i = 0; i < texto.length ; ) {
      var codon = texto.substr(i, 3);
      if ( tablaLectura[codon] ) {
        mensaje.secreto.push(texto.substr(i, 3)) ;
        i = i + 3;
      } else {
        mensaje.secreto.push(texto.charAt(i));
        i++;
      }
    }
    console.log(mensaje.secreto);
    for (var i = 0; i < mensaje.secreto.length; i++) {
      if ( tablaLectura[mensaje.secreto[i]] ) {
        mensaje.enClaro[i] = tablaLectura[mensaje.secreto[i]];
      } else {
        mensaje.enClaro[i] = mensaje.secreto[i];
      }
    }
    document.getElementById('mensaje').value = "";
    document.getElementById('mensaje').focus();
    mensaje.enClaro = mensaje.enClaro.join("");
    mensaje.secreto = mensaje.secreto.join("");
    view.mostrarEnClaro();
  },
  quitarTildes: function(textoConTildes) {
    var textoSinTildes = ''; 
    if(textoConTildes) {
      for (var i = 0; i < textoConTildes.length; i++) {
        if ( tablaTildes[textoConTildes[i]] ) {              // comprueba si el caracter existe en la tabla 
          textoSinTildes += tablaTildes[textoConTildes[i]];
        } else {
          textoSinTildes += textoConTildes[i];
        }
      }
    }
    return textoSinTildes; 
  },
  esEnter: function () {
    if (event.keyCode === 13) {
      event.preventDefault();
      handlers.escribir();
    }
  }
};

var view = {
  mostrarSecreto: function() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Texto en claro: ' + mensaje.enClaro + '</p><p>Mensaje Secreto: ' + mensaje.secreto + '</p>';
  },
  mostrarEnClaro: function() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Mensaje Secreto: ' + mensaje.secreto + '</p><p>Mensaje Descifrado: ' + mensaje.enClaro + '</p>';
  }
};
