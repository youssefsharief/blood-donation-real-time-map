import { SpeakerComponent } from './speaker/speaker.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AudienceComponent } from './audience/audience.component';

const paths: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'route1', loadChildren: './route1/route1.module#Route1Module' },
    { path: 'success', loadChildren: './success/success.module#SuccessModule' },
    { path: 'speaker', component: SpeakerComponent },
    { path: 'audience', component: AudienceComponent },
    { path: '', redirectTo: 'route1', pathMatch: 'full' },
    { path: '**', redirectTo: 'route1', pathMatch: 'full' }
]



@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
