
import { Component, ViewChild , Input, Output, OnInit , EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  @Output() cambiarValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('leyenda :'+ this.leyenda);
    //console.log('progreso:'+this.progreso);
   }

  ngOnInit() {
    //console.log('progreso:'+this.progreso);
  }

  onChange(newValue: number )
  {
    //let elemHtml: any = document.getElementsByName('progreso')[0];
    //console.log(elemHtml.value);

    if(newValue >= 100)
    {
      this.progreso=100;
    }
    else if(newValue <= 0){
      this.progreso=0;
    }
  else{
    this.progreso = newValue;
  }
 //elemHtml.value = this.progreso;
 this.txtProgress.nativeElement.value = this.progreso;
  this.cambiarValor.emit( this.progreso );
  }

  cambiarvalor( valor: number ) {
      if ( this.progreso >= 100 && valor > 100 ) {
        this.progreso = 100;
        return;
      }
      if ( this.progreso <= 0 && valor < 0) {
        this.progreso = 0;
        return;
      }

    this.progreso = this.progreso + valor;

    this.cambiarValor.emit( this.progreso );
    
    this.txtProgress.nativeElement.focus();
  }

}
