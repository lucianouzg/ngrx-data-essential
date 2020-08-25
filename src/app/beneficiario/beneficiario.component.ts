import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { Store, select } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IMasterDetailCommands } from '../core/master-detail.interface';
import { IFiltroBeneficiario } from './beneficiario.models';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit, AfterViewInit, OnDestroy, IMasterDetailCommands<User> {

  @Output() delegarPesquisa = new EventEmitter<IFiltroBeneficiario>();
  @Output() delegarPesquisaAllCustom = new EventEmitter();
  @Output() delegarPesquisaNgrxData = new EventEmitter();
  @Output() delegarPesquisaAllFromStore = new EventEmitter();
  @Output() delegarPesquisaOneFromStore = new EventEmitter<number>();
  @Input() listagem$: User[] | User;
  @Input() listagemStore$: User[] | User;


  constructor(
  ) {


  }

  subscription: Subscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  list(): any {

    this.delegarPesquisa.emit({
      id: 1
    } as IFiltroBeneficiario);
  }

  listOne(): any {
    this.list();
  }

  listAllCustom(): any {
    this.delegarPesquisaAllCustom.emit();
  }

  listAllNgrxData(): any {
    this.delegarPesquisaNgrxData.emit();
  }

  listAllFromStore(): any {
    this.delegarPesquisaAllFromStore.emit();
  }

  listOneFromStore(): any {
    this.delegarPesquisaOneFromStore.emit(1);
  }

  close(): void {

  }
  add(entity: User): void {

  }
  delete(entity: User): void {

  }
  select(entity: User): void {

  }
  update(entity: User): void {

  }
  toArray(param: any): User[] {
    return Array.isArray(param) ? param : Array.of(param);
  }
}





