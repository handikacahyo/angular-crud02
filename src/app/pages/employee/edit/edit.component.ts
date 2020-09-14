import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  crudForm: FormGroup;
  id: number;
  header: string;
  employee: Employee = {
    id: 0,
    name: '',
    phone: 0,
    email: '',
    job: '',
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';
    this.formBuilder();
  }

  addNewData() {
    let addNew = this.crudForm.getRawValue();
    if (this.id !== 0) {
      this.api.onUpdate(addNew);
    } else {
      this.api.onAdd(addNew);
    }
    this.router.navigateByUrl('');
  }

  formBuilder() {
    if (this.id !== 0) {
      this.employee = this.api.onEdit(this.id);
      this.crudForm = this.fb.group({
        id: [this.employee.id, [Validators.required]],
        name: [this.employee.name, [Validators.required]],
        email: [this.employee.email, [Validators.required]],
        phone: [this.employee.phone, [Validators.required]],
        job: [this.employee.job, [Validators.required]],
      });
    } else {
      this.crudForm = this.fb.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        job: ['', [Validators.required]],
      });
    }
  }
}
