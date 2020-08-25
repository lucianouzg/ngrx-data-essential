import { Subscription } from 'rxjs';

export interface IMasterDetailCommands<T> {
    /** A subscription object for async calls pipe */
    subscription: Subscription;
    /** Close/hide the detail component */
    close(): void;
    /** Add a new entity */
    add(entity?: T): any | void;
    /** Delete an entity */
    delete(entity?: T): any | void;
    /** "Select" an entity */
    select(entity?: T): any | void;
    /** Update an entity */
    update(entity?: T): any | void;
    /** List an entity */
    list(filter?: any): any | void;

}
