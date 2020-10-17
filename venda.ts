import { Loja } from "./loja";

export class Venda {

    constructor(
        public loja: Loja,
        public datahora: Date,
        public CCF: string,
        public COO: string) { }

    public verificaCampoObrigatorio(): void {
  
        if (!this.datahora)
            throw new Error(`O campo datahora da venda é obrigatório`)
        
        if(this.CCF == "")
            throw new Error("O campo CCF da venda é obrigatório")
      
        if(this.COO == "")
            throw new Error("O campo COO da venda é obrigatório")
        
        }

    public dados_venda(): string {

        function dataHoraAtual(){

            var data = new Date();

            var dia = data.getDate();           
            var mes = data.getMonth();          
            var ano = data.getFullYear();       
            var hora = data.getHours();         
            var min = data.getMinutes();        
            var seg = data.getSeconds();       

            var str_data = `${dia}/${mes}/${ano}`;
            var str_hora = hora + ':' + min + ':' + seg + "V";

            return str_data + str_hora;
        }

        this.verificaCampoObrigatorio();

        let datahora = dataHoraAtual();
    
        let _ccf = " CCF:" + this.CCF;
        let _coo = " COO: " + this.COO;

        return (
`${this.loja.dados_loja()}
${datahora}${_ccf}${_coo}
`)
                
    }
        
}