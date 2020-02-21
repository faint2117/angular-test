import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Input() employee;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    if(this.employee) {
      this.employeeForm = this.formBuilder.group({
        name: [this.employee.name, Validators.required],
        lastName: [this.employee.lastName, Validators.required],
        phone: [this.employee.phone, Validators.required],
        createDate: [this.employee.createDate, Validators.required],
        daySalary: [this.employee.daySalary, Validators.required]
      });
    } else {
      this.employeeForm = this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        createDate: ['', Validators.required],
        daySalary: ['', Validators.required]
      });
    }
  }

  submitForm() {
    if(!this.employee) {
      this.employee = {};
    }

    Object.assign(this.employee, this.employeeForm.value);

    this.onSubmit.emit(this.employee);
  }

}
