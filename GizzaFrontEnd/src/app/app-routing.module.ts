import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AdminGuardService} from './core/admin-guard/admin-guard.service';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent },
    { path: 'purchase', loadChildren: 'app/client-container/client-container.module#ClientContainerModule', data: { preload: true } },
    { path: 'admin',
      loadChildren: 'app/admin-container/admin-container.module#AdminContainerModule',
      canActivate: [AdminGuardService]
    },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
