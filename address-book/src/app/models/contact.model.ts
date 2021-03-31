import { UUID } from 'angular2-uuid';

export interface Contact {
    id: UUID;
    name: string;
    address: string;
    email: string ;
    phone: string;
    pendingDelete: boolean;
}
