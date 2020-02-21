import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../../../services/employee-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  employee;

  constructor(private route: ActivatedRoute, private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employee = this.empService.getEmployeeById(params.get('employeeId'));
    });
  }

  editEmployee(employee) {
    this.empService.updateEmployee(employee);
  }

}
