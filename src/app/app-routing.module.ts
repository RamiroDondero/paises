import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [

{
    path: '',
    loadChildren: ()=> import('./pais/pais.module').then(m=>m.PaisModule),
},
{
    path: '**',
    redirectTo: ''
}

];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}