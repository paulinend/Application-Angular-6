import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
// import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    PagenotfoundModule,
    // ItemsModule,
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes:', JSON.stringify(router.config, undefined, 2 ));
    }
  }
}
