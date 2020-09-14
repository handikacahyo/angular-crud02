import { EmployeeService } from './../../services/employee.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  dataSource = [];
  displayedColumns = ['id', 'name', 'email', 'phone', 'job', 'action'];
  constructor(
    private api: EmployeeService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataSource = this.api.onGet();
  }

  onDelete(i, id) {
    this.api.onDelete(i, id);
    this.dataSource = this.api.onGet();
    console.log(this.dataSource);
    this.changeDetectorRefs.detectChanges();
  }
}
