import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { SetoresComponent } from './pages/setores/setores.component';

const routes: Routes = [
  { path: "",
  redirectTo: "login",
   pathMatch: 'full'
},
  { path:"login",
   component: LoginComponent, 
   title: "Login"
 },
  { path:"pessoas", 
  component: PessoasComponent,
   title: "Pessoas" 
},
  { path:"setores", 
  component: SetoresComponent, 
  title: "Setores"
 },

 
...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
