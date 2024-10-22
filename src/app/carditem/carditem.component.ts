import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrl: './carditem.component.css'
})
export class CarditemComponent {
 @Input () employee:any;
 @Output ()
 employeeSelected = new EventEmitter<Employee>();
 @ContentChildren('employeeContent1') employeeContent1:any;

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

 ngAfterViewInit(){
  console.log("Contenido del employeeContent1");
  console.log(this.employeeContent1);
 }


}
