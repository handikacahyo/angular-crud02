import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@email.com',
      phone: 123456789,
      job: 'teacher',
    },
    {
      id: 2,
      name: 'Budi',
      email: 'budi@email.com',
      phone: 123456788,
      job: 'writer',
    },
  ];
  constructor() {}

  onGet() {
    return this.employees;
  }

  onAdd(employee: Employee) {
    this.employees.push(employee);
    console.log(this.employees);
  }

  onUpdate(employee: Employee) {
    let oldEmployee = this.employees.find((x) => x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
    oldEmployee.job = employee.job;
  }

  onDelete(i, id: Number) {
    let employeeDelete = this.employees.find((x) => x.id === id);
    let index = this.employees.indexOf(employeeDelete, 0);
    this.employees.splice(index, 1);
  }

  onEdit(id: Number) {
    return this.employees.find((x) => x.id === id);
  }
}
