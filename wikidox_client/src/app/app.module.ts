
import { APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config-service.service';
import { of, Observable, ObservableInput } from '../../node_modules/rxjs';
import { map, catchError } from 'rxjs/operators';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainareaComponent } from './main/mainarea/mainarea.component';
import { TreeheaderComponent } from './main/mainarea/treeheader/treeheader.component';
import { ViewmarkupComponent } from './main/mainarea/Views/viewmarkup/viewmarkup.component';
import { AttachmentsComponent } from './main/mainarea/attachments/attachments.component';
import { ViewpdfComponent } from './main/mainarea/Views/viewpdf/viewpdf.component';
import { ViewdocxComponent } from './main/mainarea/Views/viewdocx/viewdocx.component';
import { ViewodxComponent } from './main/mainarea/Views/viewodx/viewodx.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { NgxMdModule } from 'ngx-md';
import { EditmarkupComponent } from './main/mainarea/Views/editmarkup/editmarkup.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'ng2-tree';
import {jqxTreeComponent} from '../assets/jqwidgets-ts/angular_jqxtree';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { RedirComponent } from './redir/redir.component';
import { RoutingComponent } from './routing/routing.component';
import { FileviewComponent } from './main/mainarea/Views/viewmarkup/fileview/fileview.component';
import { SafePipe } from './safe.pipe';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { InstallComponent } from './install/install.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { DeletemarkupComponent} from './main/mainarea/Views/deletemarkup/deletemarkup.component'

import { SearchComponent } from './search/search.component';






function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
       http.get('./assets/config.json')
         .pipe(
           map((x: ConfigService) => {
             config.baseUrl = x.baseUrl;
             resolve(true);
           }),
           catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
             if (x.status !== 404) {
               resolve(false);
             }
             config.baseUrl = 'http://localhost:5000/api';
             resolve(true);
             return of({});
           })
         ).subscribe();
    });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainareaComponent,
    TreeheaderComponent,
    ViewmarkupComponent,
    AttachmentsComponent,
    ViewpdfComponent,
    ViewdocxComponent,
    ViewodxComponent,
    EditmarkupComponent,
    jqxTreeComponent,
    SanitizeHtmlPipe,
    RedirComponent,
    RoutingComponent,
    FileviewComponent,
    SafePipe,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    AdminSettingsComponent,
    AdminUsersComponent,
    SearchComponent,
    InstallComponent,
    DeletemarkupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxMdModule.forRoot(),
    CKEditorModule, FormsModule,
    TreeModule,

  ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [CookieService, ApiService,{
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [
        HttpClient,
        ConfigService
      ],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

