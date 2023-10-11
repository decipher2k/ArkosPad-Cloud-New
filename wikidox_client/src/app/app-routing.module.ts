import { DeletemarkupComponent } from './main/mainarea/Views/deletemarkup/deletemarkup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewmarkupComponent } from './main/mainarea/Views/viewmarkup/viewmarkup.component';
import { AppComponent } from './app.component';
import { EditmarkupComponent } from './main/mainarea/Views/editmarkup/editmarkup.component';
import { RedirComponent } from './redir/redir.component';
import { RoutingComponent } from './routing/routing.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { InstallComponent } from './install/install.component';



const routes: Routes =
  [
    {
      path: '',
      component: RoutingComponent
    },
{ path: 'admin/:mpage', component: AdminComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'search', component: SearchComponent },

{ path: 'Logout', component: LogoutComponent },
    {
      path: 'redir/:mid', component: RedirComponent
    },
    { path: ':url', component: RoutingComponent },

{ path: 'edit/:url/:action', component: RoutingComponent },
{ path: 'delete/:url/:action', component: DeletemarkupComponent },
{ path: 'view/:url', component: RoutingComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
