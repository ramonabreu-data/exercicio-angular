import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';

const routes: Routes = [
  { path: "",
  redirectTo: "login",
   pathMatch: 'full'
},
/*
  { path:"login",
   component: LoginComponent, 
   title: "Login"
 },
 */
  { path:"pessoas", 
  component: PessoasComponent,
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,ESTAGIÁRIO,ADVOGADO,PROCURADOR'
  }
   
},
  { path:"setores", 
  component: SetoresComponent, 
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,ESTAGIÁRIO,ADVOGADO,PROCURADOR'
  }
 },
 {
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard],
  data: {
  role: 'ADMIN,ESTAGIÁRIO,ADVOGADO,PROCURADOR'
  }
  },
 
...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
