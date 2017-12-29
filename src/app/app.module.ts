import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app.routing.module';
import {SharedModule} from './shared/modules/shared.module';
import { TopicsComponent } from './topics/topics.component';
// import { Bro } from '@angular/platform/animations';

const appRoutes: Routes = [
  { path: 'topics', component: TopicsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent
  ],
  imports: [
    // AppRoutingModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
