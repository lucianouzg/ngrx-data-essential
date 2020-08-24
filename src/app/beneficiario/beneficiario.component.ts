import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { Store, select } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { entityMetadata } from '../store/user-store.module';
import { selectEntityCacheEntities } from './beneficiario.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit, AfterViewInit {

  listagem: User[] = [];

  constructor(
    private service: EmployeeService,
    public store: Store<any>
  ) {

    this.service.getAll().subscribe(response => {
      console.log(response);
    });

    // this.service.getAll().subscribe(response => {
    //   console.log(response);
    //   this.listagem = response;
    // });

    // this.store.pipe(select( ??selector?? ));
    // this.store.dispatch(new ActionTeste({ data: [new User()], entityName: 'User', entityOp: '@ngrx/data/query-all/success' }));



  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

    setTimeout(() => {
      this.service.filteredEntities$.subscribe((users: User[]) => {
        console.log('get filtrados ', users);
        this.listagem = users;
      });
    }, 7000);

  }

}


export class ActionTeste implements Action {
  readonly type = '[User] @ngrx/data/query-all/success';

  constructor(public payload: { entityName: string, entityOp: string, data: User[] }) {
  }
}
