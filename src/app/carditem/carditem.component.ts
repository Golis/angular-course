import { Component, EventEmitter, Input, Output } from '@angular/core';
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
