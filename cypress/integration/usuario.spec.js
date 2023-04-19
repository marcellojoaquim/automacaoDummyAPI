/// <reference types="Cypress" />
import Dummy from "../services/dummy.services";
import ValidaDummy from "../services/validaDummy.services";
import Factory from "../fixtures/factory";

describe('Casos de teste sobre a rota /usuarios com resultados validos', () =>{

    it('Buscar todos os usuários', () => {
        Dummy.burcarUsuarios().then(res => {
            ValidaDummy.validaBuscaDeUsuario(res)
            cy.log(res)
        })
    })

    it('Buscar um único usuário, id', () => {
        Dummy.buscarUsuarioPorId().then(res => {
            ValidaDummy.validaBuscaDeUsuarioPorId(res)
            cy.log(res);
        })
    })

    it.only("Procurar usuário e salvar em json", ()=>{
        let numero = Factory.gerarInteiroAleatorio();
        Dummy.burcarUsuarios().then(res => {
            cy.log(JSON.stringify(res.body.users[numero]))
            cy.writeFile('./cypress/fixtures/usuario.json', res.body.users[numero]);
        })
    })

    it('Buscar usuário de um arquivo json e realizar login', () => {
        cy.fixture('usuario.json').then(json => {
            let user = {
                username: json.username,
                password: json.password
            }
            Dummy.logar(user).then (res => {
                ValidaDummy.validaLogin(res)
                Dummy.salvaBearer(res)
            })
        })
    })

    it.only('Deve buscar usuário pelo nome', () => {
        cy.fixture('usuario.json').then(json => {
            let name = {
                name: json.firstName
            }
            cy.log(name)
            Dummy.buscarUsuarioPorNome(name.name).then(res => {
                ValidaDummy.validaBuscaPorNome(res)
            })
        })
    })



})