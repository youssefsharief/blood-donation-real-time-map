import { SpeakerComponent } from './speaker/speaker.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AudienceComponent } from './audience/audience.component';

const paths: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'donors', loadChildren: './donors/donors.module#DonorsModule' },
    { path: 'patients', loadChildren: './patients/patients.module#PatientsModule' },
    
    { path: 'speaker', component: SpeakerComponent },
    { path: 'audience', component: AudienceComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }
]



@NgModule({
    imports: [RouterModule.forRoot(paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
