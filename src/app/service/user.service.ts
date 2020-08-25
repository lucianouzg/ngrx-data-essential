import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, DefaultDataServiceConfig } from '@ngrx/data';
import { User } from '../entity/user.entity';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Album } from '../entity/album.entity';
import { HttpClient } from '@angular/common/http';
import { IFiltroBeneficiario } from '../beneficiario/beneficiario.models';

@Injectable({ providedIn: 'root' })
export class UserService extends EntityCollectionServiceBase<User> {
    constructor(
        private httpService: HttpClient,
        serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('User', serviceElementsFactory);
    }

    // getEmployeeById() {
    //     return this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
    //         (response: User) => {
    //             this.addOneToCache(response);
    //             return of(response);
    //         });
    // }

    getAllUsersFromStore(): Observable<User[]> {
        return this.entities$;
    }

    getOneUserFromStore(id: number): Observable<User> {
        return this.entities$.pipe(
            map((lista: any[]) => {
                return lista[id - 1];
            }));
    }

    getAllUsers(): Observable<User[]> {
        return this.httpService.get<User[]>('https://jsonplaceholder.typicode.com/users');
        // return this.getAll(); NOTE utiliza o ngrx-data
    }

    // getOne
    getUserByFilter(filtro: IFiltroBeneficiario): Observable<User | User[]> {
        // NOTE já temos solução para usar os filtros na requisição HTTP portanto escolhi não perder tempo com isso
        return this.httpService.get<User>('https://jsonplaceholder.typicode.com/users/' + filtro.id).pipe(
            map((response: User) => {
                this.addOneToCache(response);
                console.log('getOne => ', response);
                return response;
            }));
        // return this.httpService.get('https://jsonplaceholder.typicode.com/users');

    }

    getUserById(id: number): any {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users/' + id).pipe(map((response: any) => {
            this.addOneToCache(response);
            return of(response);
        }));
    }
}

