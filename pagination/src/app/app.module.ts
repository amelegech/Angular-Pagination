import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination'; //npm i
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail.component';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts.component';
import { PostsDetailComponent } from './posts-detail.component';

const myRoutes : Routes =[
  {path:'users', component:UsersComponent},
  {path:'users/:email', component:DetailComponent},
  {path:'posts',  component:PostsComponent},
  {path:'posts/:id',  component:PostsDetailComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostsDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    NgxPaginationModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
