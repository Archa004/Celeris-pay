import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './home/faq/faq.component';
import { HomeComponent } from './home/home.component';
import { IntegrationComponent } from './home/integration/integration.component';
import { PaymentComponent } from './home/payment/payment.component';
import { SecureComponent } from './home/secure/secure.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';
import { TestingComponent } from './home/testing/testing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
      {path:'',component:HomeComponent, pathMatch: 'full'},
      {path:'payment',component:PaymentComponent},
      {path:'subscription',component:SubscriptionComponent},
      {path:'integration',component:IntegrationComponent},
      {path:'testing',component:TestingComponent},
      {path:'faq',component:FaqComponent},
      {path:'secure',component:SecureComponent},
      {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
