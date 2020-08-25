import { NgModule } from '@angular/core';
import { EntityDataModule, EntityMetadataMap } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { User } from '../entity/user.entity';

export function getUserId(user: User): number {
    return user.id;
}

export const entityMetadata: EntityMetadataMap = {
    User: {
        entityName: 'User',
        selectId: getUserId,
        
    },
};

const pluralNames = {
    User: 'Users'
};

@NgModule({
    imports: [
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({ entityMetadata, pluralNames }),
        StoreDevtoolsModule.instrument(),
    ],
})
export class UserStoreModule { }