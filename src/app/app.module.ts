import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ThanksComponent } from './components/thanks/thanks.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'feedback', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'thankyou', component: ThanksComponent, pathMatch: 'prefix' },
]

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
