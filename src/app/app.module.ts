import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DefaultDataServiceConfig } from '@ngrx/data';
import { UserStoreModule } from './store/user-store.module';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiarioModule } from './beneficiario/beneficiario.module';
import { environment } from '../environments/environment';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.API_ROOT_URL,
  timeout: environment.HTTP_TIMEOUT_IN_MS,
  // entityHttpResourceUrls: {
    // Case matters. Match the case of the entity name.
    // User: {
    // You must specify the root as part of the resource URL.
    // entityResourceUrl: environment.API_ROOT_URL + '/users/',
    // collectionResourceUrl: environment.API_ROOT_URL + '/users/'
    // }
  // },
  // Simulate latency for demo
  getDelay:  9000,
  // saveDelay: 9000
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UserStoreModule,
    BeneficiarioModule
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }