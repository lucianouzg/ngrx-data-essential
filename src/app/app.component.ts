import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';
import { User } from './entity/user.entity';
import { Store, select, Action } from '@ngrx/store';
import { IFiltroBeneficiario } from './beneficiario/beneficiario.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ngrx-try4';
  listagem$: Observable<User[] | User>;
  listagemStore$: Observable<User[] | User>;
  loading$: Observable<boolean>;

  constructor(
    private service: UserService,
  ) {

    this.loading$ = this.service.loading$;
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

    // this.service.getAll().subscribe(response => {
    //   console.log(response);
    // });


    // setTimeout(() => {
    //   this.service.filteredEntities$.subscribe((users: User[]) => {
    //     console.log('get filtrados ', users);
    //     this.listagem = users;
    //   });
    // }, 7000);

    // this.service.getAll().subscribe(response => {
    //   console.log(response);
    //   this.listagem = response;
    // });

    // this.store.pipe(select( ??selector?? ));
    // this.store.dispatch(new ActionTeste({ data: [new User()], entityName: 'User', entityOp: '@ngrx/data/query-all/success' }));

  }

  obterBeneficiariosFiltrados(filtro: IFiltroBeneficiario): any {

    this.listagem$ = this.service.getUserByFilter(filtro);

  }

  obterBeneficiariosFiltradosNgrxData(): any {
    this.listagem$ = this.service.getAll();
  }

  obterBeneficiariosFiltradosCustom(): any {
    this.listagem$ = this.service.getAllUsers();
  }

  obterBeneficiariosDaStoreAutomatizada(): any {
    this.listagemStore$ = this.service.getAllUsersFromStore();
  }

  obterBeneficiarioDaStoreAutomatizada(id: number): any {
    this.listagemStore$ = this.service.getOneUserFromStore(id);
  }

}




// export class ActionTeste implements Action {
//   readonly type = '[User] @ngrx/data/query-all/success';

//   constructor(public payload: { entityName: string, entityOp: string, data: User[] }) {
//   }
// }