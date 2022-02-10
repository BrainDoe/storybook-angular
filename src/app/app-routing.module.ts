import { StoryDetailsComponent } from './pages/story-details/story-details.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post-form', component: PostFormComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'story-details/:id', component: StoryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
