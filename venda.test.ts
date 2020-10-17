import { Endereco } from './endereco';
import { Loja } from './loja';
import { Venda } from './venda';

function verificaCampoObrigatorio(mensagemEsperada: string, venda: Venda) {
    try {
      venda.dados_venda();
    } catch (e) {
      expect(e.message).toBe(mensagemEsperada);
    }
  }
  
const NOME_LOJA = "Loja 1"
const LOGRADOURO = "Log 1"
const NUMERO = 10
const COMPLEMENTO = "C1"
const BAIRRO = "Bai 1"
const MUNICIPIO = "Mun 1"
const ESTADO = "E1"
const CEP = "11111-111"
const TELEFONE = "(11) 1111-1111"
const OBSERVACAO = "Obs 1"
const CNPJ = "11.111.111/1111-11"
const INSCRICAO_ESTADUAL = "123456789"
const CCF_VENDA = "021784"
const COO_VENDA = "035804"

const DATAHORA = new Date();

let endereco : Endereco = new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO,
  BAIRRO, MUNICIPIO, ESTADO, CEP);

let loja: Loja = new Loja(NOME_LOJA, endereco, TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL);

// test('loja vazia', () => {
//     let loja_vazia: Venda = new Venda(, DATAHORA, CCF_VENDA, COO_VENDA);
// })

// test('data e hora vazios', () => {
//     let data_hora_vazios: Venda = new Venda(loja, , CCF_VENDA, COO_VENDA);
//       verificaCampoObrigatorio(`O campo datahora da venda é obrigatório`, data_hora_vazios);
// })

test('ccf vazio', () => {
  let ccf_vazio: Venda = new Venda(loja, DATAHORA, "", COO_VENDA);
    verificaCampoObrigatorio(`O campo CCF da venda é obrigatório`, ccf_vazio);
});

test('coo vazio', () => {
  let coo_vazio: Venda = new Venda(loja, DATAHORA, CCF_VENDA, "");
    verificaCampoObrigatorio(`O campo COO da venda é obrigatório`, coo_vazio);
});