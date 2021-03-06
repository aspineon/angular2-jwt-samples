import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { CallbackComponent } from './containers/callback/callback.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ExternalApiComponent } from './containers/external-api/external-api.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth/auth.service';

let service: AuthService;
const tokenGetter = async () => {
  const client = await service.getAuth0Client();
  return await client.getTokenSilently();
};

export function hljsLanguages() {
  return [{ name: 'json', func: json }];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeroComponent,
    FooterComponent,
    HomeContentComponent,
    CallbackComponent,
    LoadingComponent,
    ProfileComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    AppRoutingModule,
    NgbModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService) {
    service = authService;
  }
}
