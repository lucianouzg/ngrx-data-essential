import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioComponent } from './beneficiario.component';
import { StoreModule, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import { EffectsModule, Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { entityMetadata } from '../../app/store/user-store.module';
import { EntityCache, EntityCacheReducerFactory, EntityCollectionReducerFactory, EntityCollectionReducerRegistry } from '@ngrx/data';
import { User } from '../entity/user.entity';



@Injectable()
export class BeneficiarioEffects {

  @Effect()
  loadBeneficiarioCompleto$: Observable<any> = this.actions$.pipe(
    ofType<LoadBeneficiarioCompleto>('LOAD_BENEFICIARIO_COMPLETO'),
    mergeMap((action: LoadBeneficiarioCompleto) =>
      of()
      // this.beneficiarioService.loadBeneficiarioCompleto(action.payload.numeroCliente, action.payload.numeroCooperativa).pipe(
      //   map((response: any) => {
      //     return of();
      //   }),
      //   catchError((response: any) => {
      //     return of();
      //   })
      // )
    )
  );

  constructor(
    private actions$: Actions,
  ) {

    // EntityCollectionReducerRegistry.registerReducer()

  }
}


export class LoadBeneficiarioCompleto implements Action {
  readonly type = 'LOAD_BENEFICIARIO_COMPLETO';

  constructor(public payload: { numeroCliente: number, numeroCooperativa: number }) { }

}

export interface State {
  completo: any;
}

export const initialState: State = {
  completo: null
}

export function BeneficiarioReducer(state: State | undefined, action: LoadBeneficiarioCompleto): State {
  return { ...state, completo: 3 };

}

export const selectFeature = createFeatureSelector<State>('beneficiario');

export const selectBeneficiariosFiltrados = createSelector(
  selectFeature,
  (i) => i.completo);

export const selectFeature2 = createFeatureSelector<any>('entityCache');

export const selectEntityCacheEntities = createSelector(
  selectFeature2,
  (i) => i.User.entities);

// export const selectFeature2 = createFeatureSelector<typeof entityMetadata>('entityCache');
// export const selectFeature2 = createFeatureSelector<any>('entityCache');

// export const selectEntityCacheEntities = createSelector(
//   selectFeature2,
//   (i) => i.User.entities);


@NgModule({
  declarations: [BeneficiarioComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('beneficiario', BeneficiarioReducer),
    EffectsModule.forFeature([BeneficiarioEffects]),
  ],
  exports: [BeneficiarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BeneficiarioModule { }