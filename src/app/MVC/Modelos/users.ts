//Permisos
export interface Roles{
    editor?: boolean;
    admin?:boolean;
}
export interface UsersInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;//Permisos
}
