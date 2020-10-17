import {Coordenador} from "./coordenador";

export class Departamento {
    constructor(
        public nome_depto : string,
        public sigla : string,
        public localizacao : string,
        public coordenador : Coordenador){}

    public verificaCampoObrigatorio() : void {
        if(this.nome_depto == "")
            throw new Error(`O campo nome do departamento é obrigatório`)
        if(this.localizacao == "")
            throw new Error(`O campo localização do departamento é obrigatório`)
    }

    public dados_departamento(): string {
        this.verificaCampoObrigatorio()

        let _nome = this.sigla ? this.nome_depto + ", " : this.nome_depto
        let _sigla = this.sigla ? this.sigla : ""
        let _localizacao = "Local do depto: " + this.localizacao

        return(
`${_nome}${_sigla}
${_localizacao}
${this.coordenador.dados_coord()}`)
    }

}