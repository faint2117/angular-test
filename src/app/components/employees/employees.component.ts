import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'phone', 'createDate', 'unnasignDate', 'daySalary', 'actions'];

  constructor(private empService: EmployeeServiceService, private router: Router) { 
    
  }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

  delete(id) {
    this.empService.deleteEmployee(id);
    this.employees = this.empService.getEmployees();
  }

}
