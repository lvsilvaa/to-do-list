import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class Calculadora {
numero1!: number

numero2!: number 

resultado!: number

somar(){
  this.resultado = this.numero1 + this.numero2
}

subtrair(){
  this.resultado = this.numero1 - this.numero2
}

multiplicar(){
  this.resultado = this.numero1 * this.numero2
}

dividir(){
  this.resultado = this.numero1 / this.numero2
}}
