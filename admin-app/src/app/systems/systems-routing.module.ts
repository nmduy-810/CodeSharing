import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FunctionsComponent } from "./functions/functions.component";
import { PermissionsComponent } from "./permissions/permissions.component";
import { RolesComponent } from "./roles/roles.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'users',
                component: UsersComponent,
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'functions',
                component: FunctionsComponent,
                data: {
                    title: 'Functions',
                }
            },
            {
                path: 'roles',
                component: RolesComponent,
                data: {
                    title: 'Roles',
                }
            },
            {
                path: 'permissions',
                component: PermissionsComponent,
                data: {
                    title: 'Permissions'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemsRoutingModule { }