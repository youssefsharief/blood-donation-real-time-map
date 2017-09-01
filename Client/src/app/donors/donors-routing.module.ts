import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { DonorsComponent } from './Donors.component';
import { SuccessComponent } from './success/success.component';
import { PostingComponent } from './posting/posting.component';

const routes: Routes = [
    {
        path: '',   component: DonorsComponent,
    },
        // children: [
             {path: 'success', component: SuccessComponent,},
             {path: 'posting/:id', loadChildren: PostingComponent,}
        // ]
    // }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DonorsRoutingModule { }
