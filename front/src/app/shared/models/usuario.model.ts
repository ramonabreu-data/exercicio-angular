export class Usuario {
    constructor(
        public id?: number,
        public nome?:  string,
        public login?:  string,
        public senha?:  string,
        //(admin, advogados, procuradores e estagiários)
        public perfil?:  string,
    ){}
}
