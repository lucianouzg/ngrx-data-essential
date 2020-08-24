import { Component } from '@angular/core';
import { EmployeeService } from './service/user.service';
import { Observable } from 'rxjs';
import { User } from './entity/user.entity';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-try4';
  listagem: User[] = [];
  constructor(
    private service: EmployeeService,
  ) {
    // this.service.getByKey('name').subscribe(response => {
    //     console.log(response);
    // });
    // this.service.getAll().subscribe(response => {
    //   console.log(response);
    // });

    // this.service.getUserById(1).subscribe((response: Observable<any>) => {
    //   response.subscribe((user: User) => {
    //     console.log('usuario do get personalizado ', user);
    //     this.listagem[0] = user;
    //   });
    // });

    // this.store.pipe(select(selectEntityCacheEntities)).subscribe(value => {
    //   if (value) {
    //     console.log('valor vindo do select custom', value);
    //   }
    // });

  }
}
