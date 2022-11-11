import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './home/payment/payment.component';
import { IntegrationComponent } from './home/integration/integration.component';
import { SecureComponent } from './home/secure/secure.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';
import { FaqComponent } from './home/faq/faq.component';
import { TestingComponent } from './home/testing/testing.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrationDataComponent } from './home/integration/integration-data/integration-data.component';
import { CardsComponent } from './home/integration/integration-data/cards/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    IntegrationComponent,
    SecureComponent,
    SubscriptionComponent,
    FaqComponent,
    TestingComponent,
    SideNavBarComponent,
    HeaderNavComponent,
    NotFoundComponent,
    IntegrationDataComponent,
    CardsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
