import { Component } from '@angular/core';
import { employees } from '../../../public/assets/fixtures/employees';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];
  employees = employees;
  selectedEmployee: Employee;
  
  constructor(){
    this.selectedEmployee = new Employee();
  }

  onEmployeeSelected(employee: Employee){
    this.selectedEmployee = employee
  }
}
