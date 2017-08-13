import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const paths: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'route1', loadChildren: './route1/route1.module#Route1Module' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]



@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
