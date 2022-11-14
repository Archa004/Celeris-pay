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
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { animationState: 'Payment' },
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    data: { animationState: 'Subscription' },
  },
  {
    path: 'integration',
    component: IntegrationComponent,
    data: { animationState: 'Integration' },
  },
  {
    path: 'testing',
    component: TestingComponent,
    data: { animationState: 'Testing' },
  },
  { path: 'faq', component: FaqComponent, data: { animationState: 'Faq' } },
  {
    path: 'secure',
    component: SecureComponent,
    data: { animationState: 'Secure' },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 25],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
