import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrl: './carditem.component.css'
})
export class CarditemComponent{
 @Input () employee:any;
 @Output ()
 employeeSelected = new EventEmitter<Employee>();
 @ContentChildren('employeeContent1') employeeContent1:any;

 constructor(){
  console.log('constructor CarditemComponent');
  console.log(this.employee);
 }

ngOnChanges(changes: any){
console.log('ngOnChanges CarditemComponent', changes);
}

// Importante
ngOnInit(){
  console.log('ngOnInit CarditemComponent');
  console.log(this.employee);
}

ngDoCheck(){
  console.log('ngDoCheck CarditemComponent');
  console.log('Buen método para implementar cualquier lógica de detección manual de cambios');
}

// Importante
ngAfterContentInit(){
  console.log('ngAfterContentInit CarditemComponent');
  console.log('Buen lugar para trabajar con cualquier dato relacionado con ContentChild y ContentChildren');

  console.log("Contenido del employeeContent1");
  console.log(this.employeeContent1);
}

ngContentChecked(){
  console.log('ngContentChecked CarditemComponent');
  console.log('Método que permite verificar los cambios respecto al contenido proyectado. Se llama directamente tras invocarse a ngOnchanges()');
}

// Importante
ngAfterViewInit(){
  console.log('ngAfterViewInit CarditemComponent');
  console.log('Método que guarda relación con ViewChild y ViewChildren. Es el primer momento en el que tengo acceso a estos datos con seguridad');
 }

 ngAfterViewChecked(){
  console.log('ngAfterViewChecked CarditemComponent');
  console.log('Método para verificar los cambios respecto a VIewChild y ViewChildren. Se lanza automáticamente tras ngOnChanges()');
 }

 // Importante
 ngOnDestroy(){
  console.log('ngOnDestroy CarditemComponent');
  console.log('Buen método para liberar memoria de las suscripciones que hemos realizado');
 }

 onEmployeeSelected(){
  this.employeeSelected.emit(this.employee);
 }

 onCheckRank(rank: string){
  if(rank === "senior"){
    return {'text-decoration': "underline"}
  } else{
    return null;
  }
 }

}
