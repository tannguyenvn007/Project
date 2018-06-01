import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Thuc hien Import RouterModule, Routes

import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { DetailComponent } from './components/detail/detail.component';
import { TestDetailComponent } from './components/test-detail/test-detail.component';
import { NavbarComponent } from './component-admin/navbar/navbar.component';
import { VocabularyAddComponent } from './component-admin/vocabulary/vocabulary-add/vocabulary-add.component';
import { VocabularyEditComponent } from './component-admin/vocabulary/vocabulary-edit/vocabulary-edit.component';
import { VocabularyListComponent } from './component-admin/vocabulary/vocabulary-list/vocabulary-list.component';
import { TopicListComponent } from './component-admin/topic/topic-list/topic-list.component';
import { TopicAddComponent } from './component-admin/topic/topic-add/topic-add.component';
import { TopicEditComponent } from './component-admin/topic/topic-edit/topic-edit.component';
import { UserListComponent } from './component-admin/user/user-list/user-list.component';
import { FirstComponent } from './component-admin/first/first.component';


const appRoutes :Routes = [

  {
    path :'',
    component : IndexComponent
  },
  {
    path :'index',
    component : IndexComponent
  },
  {
    path :'contact',
    component : ContactComponent
  },
  {
    path :'test',
    component : TestComponent
  },
  {
    path :'login',
    component : LoginComponent
  },
  {
    path :'register',
    component : RegisterComponent
  },
  {
    path :'detail',
    component : DetailComponent
  },
   {
    path: 'admin',
    component: TopicListComponent
  },

  {
    path: 'admin/topiclist',
    component: TopicListComponent
  },

  {
    path: ':id/admin/topicedit',
    component: TopicEditComponent
  },
  {
    path: 'admin/topicadd',
    component: TopicAddComponent
  },
  {
    path: 'admin/vocabularyadd',
    component: VocabularyAddComponent
  },
  {
    path: ':id/admin/vocabularyedit',
    component: VocabularyEditComponent
  },
  {
    path: 'admin/vocabularylist',
    component: VocabularyListComponent
  },
  {
    path: 'admin/userlist',
    component: UserListComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    DetailComponent,
    TestDetailComponent,
    NavbarComponent,
    VocabularyAddComponent,
    VocabularyEditComponent,
    VocabularyListComponent,
    TopicListComponent,
    TopicAddComponent,
    TopicEditComponent,
    UserListComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
