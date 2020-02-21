import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  addEmployee(employee) {
    employee.id = sessionStorage.length+1;
    sessionStorage.setItem((employee.id).toString(), JSON.stringify(employee));
  }

  updateEmployee(employee) {
    sessionStorage.setItem(employee.id, JSON.stringify(employee));
  }

  deleteEmployee(employeeId) {
    var employee = this.getEmployeeById(employeeId);
    employee.unnasignDate = new Date();
    this.updateEmployee(employee);
  }

  getEmployeeById(id) {
    return JSON.parse(sessionStorage.getItem(id));
  }

  getEmployees() {
    var object = Object.keys(sessionStorage);
    return Object.keys(sessionStorage).reduce((result, key) => {
      result.push(JSON.parse(sessionStorage.getItem(key)));
      return result;
    }, []).sort( (x,y) => x.id - y.id);
  }
}
