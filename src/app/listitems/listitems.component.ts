import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { employees } from '../../../public/assets/fixtures/employees';
import { Employee } from '../../models/employee';
import { DatePipe } from '@angular/common';
import { CarditemComponent } from '../carditem/carditem.component';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  @ViewChild('todayRef') todayRef?: ElementRef
  @ViewChildren('component') cards!: QueryList<CarditemComponent>;

  firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];
  employees = employees;
  selectedEmployee: Employee;
  today = new Date();
  tomorrow?:any;
  datepipe: DatePipe = new DatePipe('en-US');
  
  constructor(){
    this.selectedEmployee = new Employee();
    console.log("constructor");
    console.log(this.todayRef?.nativeElement.innerText);
  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    console.log(this.todayRef?.nativeElement.innerText);
    this.tomorrow = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() +1)), 'dd/MM/YYYY');
    console.log("tomorrow");
    console.log(this.tomorrow);
    console.log("cards");
    console.log(this.cards);
  }

  onEmployeeSelected(employee: Employee){
    this.selectedEmployee = employee
  }
}
