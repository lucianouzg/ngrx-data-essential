import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-try4';
  constructor(private service: EmployeeService) {
    // this.service.getByKey('name').subscribe(response => {
    //     console.log(response);
    // });
    this.service.getAll().subscribe(response => {
      console.log(response);
    });
  }
}
