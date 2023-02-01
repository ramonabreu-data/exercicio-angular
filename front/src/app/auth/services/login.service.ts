import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
//import { Login } from 'src/app/shared/models/login.model';
//import { Usuario } from 'src/app/shared/models/usuario.model';

const LS_CHAVE: string  = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario{
    let usu = localStorage[LS_CHAVE];
    return(usu ? JSON.parse(localStorage[LS_CHAVE]): null);
  }
  public set usuarioLogado(usuario:Usuario){
    localStorage[LS_CHAVE]=JSON.stringify(usuario);
  }
  logout(){
    delete localStorage[LS_CHAVE];
  }
  login(login:Login):Observable<Usuario | null>{
    let usu = new Usuario(1,"Razer-Estagiágio",
            login.login, login.senha, "ESTAGIÁRIO"
    );
    if(login.login == login.senha){
      if(login.login == "admin"){
        usu = new Usuario(1, "Razer-Admin", login.login, login.senha, "ADMIN");
      }
      else if(login.login == "advogado"){
          usu = new Usuario(1, "Razer-Advogado", login.login, login.senha, "ADVOGADO");

    }
    else if(login.login == "procurador"){
      usu = new Usuario(1, "Razer-Procurador", login.login, login.senha, "PROCURADOR");

    }
      return of(usu);
      }
      else{
        return of(null);
      }
}
}
