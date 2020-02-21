import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
  }

  addEmployee(employee){
    this.empService.addEmployee(employee);
  }

}
