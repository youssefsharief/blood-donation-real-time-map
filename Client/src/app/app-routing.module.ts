import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const paths: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: '**', redirectTo: 'home', pathMatch: "full" }
]



@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
