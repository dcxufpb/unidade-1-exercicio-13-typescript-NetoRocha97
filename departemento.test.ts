import {Coordenador} from './coordenador'
import {Departamento} from './departamento'

function verificaCampoObrigatorio(mensagemEsperada: string, departamento: Departamento) {
    try {
      departamento.dados_departamento();
    } catch (e) {
      expect(e.message).toBe(mensagemEsperada);
    }
}

const NOME_DEPTO = "Departamento 1"
const SIGLA = "Dep 1"
const LOCALIZACAO = "Local 1"
const NOME_COORD = "Coordenador 1"
const IDADE = 44
const CPF = "012.345.678-99"

const TEXTO_ESPERADO_DEPTO_COMPLETO: string = `Departamento 1, Dep 1
Local do depto: Local 1
Coordenador 1
Idade: 44
Cpf do coord: 012.345.678-99`

const TEXTO_ESPERADO_SEM_SIGLA: string = `Departamento 1
Local do depto: Local 1
Coordenador 1
Idade: 44
Cpf do coord: 012.345.678-99`

const TEXTO_ESPERADO_SEM_IDADE: string = `Departamento 1, Dep 1
Local do depto: Local 1
Coordenador 1
Cpf do coord: 012.345.678-99`

const TEXTO_ESPERADO_SEM_SIGLA_IDADE: string = `Departamento 1
Local do depto: Local 1
Coordenador 1
Cpf do coord: 012.345.678-99`

test('Departamento Completo', () => {
  let departamentoCompleto: Departamento = new Departamento(NOME_DEPTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORD, IDADE, CPF))
  expect(departamentoCompleto.dados_departamento()).toBe(TEXTO_ESPERADO_DEPTO_COMPLETO)
})

test('Sigla Vazia', () => {
  let siglaVazia: Departamento = new Departamento(NOME_DEPTO, "", LOCALIZACAO, new Coordenador(NOME_COORD, IDADE, CPF))
  expect(siglaVazia.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_SIGLA)
})

test('Idade Vazia', () => {
  let idadeVazia: Departamento = new Departamento(NOME_DEPTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORD, 0, CPF))
  expect(idadeVazia.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_IDADE)
})

test('Sigla e idade vazias', () => {
  let sigla_idade_vazias: Departamento = new Departamento(NOME_DEPTO, "", LOCALIZACAO, new Coordenador(NOME_COORD, 0, CPF))
  expect(sigla_idade_vazias.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_SIGLA_IDADE)
})

test('Nome do coordenador vazio', () => {
  let nomeCoordVazio: Departamento = new Departamento(NOME_DEPTO, SIGLA, LOCALIZACAO, new Coordenador("", IDADE, CPF))
  verificaCampoObrigatorio(`O campo nome do coordenador do departamento é obrigatório`, nomeCoordVazio)
})

test('Cpf do coordenador vazio', () => {
  let cpfCoordVazio: Departamento = new Departamento(NOME_DEPTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORD, IDADE, ""))
  verificaCampoObrigatorio(`O campo cpf do coordenador do departamento é obrigatório`, cpfCoordVazio)
})

test('Nome do departamento vazio', () => {
  let nomeDeptoVazio: Departamento = new Departamento("", SIGLA, LOCALIZACAO, new Coordenador(NOME_COORD, IDADE, CPF))
  verificaCampoObrigatorio(`O campo nome do departamento é obrigatório`, nomeDeptoVazio)
})

test('Local do departamento vazio', () => {
  let localDeptoVazio: Departamento = new Departamento(NOME_DEPTO, SIGLA, "", new Coordenador(NOME_COORD, IDADE, CPF))
  verificaCampoObrigatorio(`O campo localização do departamento é obrigatório`, localDeptoVazio)
})