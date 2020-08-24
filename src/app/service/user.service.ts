import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, DefaultDataServiceConfig } from '@ngrx/data';
import { User } from '../entity/user.entity';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../entity/album.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends EntityCollectionServiceBase<User> {
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

    getUserById(id: number) {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users/' + id).pipe(map((response: any) => {
            this.addOneToCache(response);
            return of(response);
        }));
    }
}

