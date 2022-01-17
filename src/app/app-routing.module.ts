import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { BusinessNewsComponent } from './pages/business-news/business-news.component';
import { EntNewsComponent } from './pages/ent-news/ent-news.component';
import { HealthNewsComponent } from './pages/health-news/health-news.component';
import { ScienceNewsComponent } from './pages/science-news/science-news.component';
import { SportNewsComponent } from './pages/sport-news/sport-news.component';
import { TechNewsComponent } from './pages/tech-news/tech-news.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { SplitterComponent } from './pages/splitter/splitter.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news-list', component: NewsListComponent },
  { path: 'business', component: BusinessNewsComponent },
  { path: 'ent', component: EntNewsComponent },
  { path: 'health', component: HealthNewsComponent },
  { path: 'science', component: ScienceNewsComponent },
  { path: 'sport', component: SportNewsComponent },
  { path: 'tech', component: TechNewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegisterComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'splitter', component: SplitterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
