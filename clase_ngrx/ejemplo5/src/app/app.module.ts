import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for in-memory web-api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { GameData } from './games/game-data';
import { AppData } from './app-data';

import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShellComponent } from './home/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

import { CoreModule } from './core/core.module';

/* Feature Modules */
import { UserModule } from './user/user.module';

/*ngrx*/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    ShellComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Game Catalog App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    CoreModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
