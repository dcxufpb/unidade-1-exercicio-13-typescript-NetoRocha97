export class Coordenador {
    constructor(
        public nome_coord : string,
        public idade : number,
        public cpf : string) {}

    public verificaCampoObrigatorio(): void {
        if(this.nome_coord == "")
            throw new Error(`O campo nome do coordenador do departamento é obrigatório`)
        if(this.cpf == "")
            throw new Error(`O campo cpf do coordenador do departamento é obrigatório`)
        
    }

    public dados_coord(): string {
        this.verificaCampoObrigatorio();

        const _idade = this.idade == 0 ? "" : "\nIdade: " + this.idade
        const _cpf = "Cpf do coord: " + this.cpf

        return (
`${this.nome_coord}${_idade}
${_cpf}`
        )
    }
}