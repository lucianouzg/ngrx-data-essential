import { NgModule } from '@angular/core';
import { EntityDataModule, EntityMetadataMap } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Employee } from '../entity/user.entity';

export function getUserId(user: Employee): string {
    return user.name;
}

export const entityMetadata: EntityMetadataMap = {
    Employee: {
        entityName: 'User',
        selectId: getUserId,
    }
}

@NgModule({
    imports: [
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({ entityMetadata }),
        StoreDevtoolsModule.instrument(),
    ],
})
export class EmployeeStoreModule { }