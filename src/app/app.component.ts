import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra = 'LIMA';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;




  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {

    this.palabraOculta = '_ '.repeat(this.palabra.length);

  }

  comprobar(letra) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    console.log(palabraOcultaArr);

    for (let i = 0; i < this.palabra.length; i++) {

      if (this.palabra[i] === letra) {

        palabraOcultaArr[i] = letra;

      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEva = palabraArr.join('');
    console.log(palabraEva);

    if (palabraEva === this.palabra) {
      this.gano = true;
      console.log('Usted gano');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usted perdio');
    }


  }



  existeLetra(letra) {
    if (this.palabra.indexOf(letra) >= 0) {

      console.log('Letra existe ' + letra);
    } else {

      console.log('Letra no existe ' + letra);
      this.intentos++;
    }
  }
}




