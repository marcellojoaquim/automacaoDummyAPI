import Factory from "../fixtures/factory";

const URL_USUARIO = '/users'
const URL_LOGIN = '/auth/login'

export default class Dummy {
    //Ações que podemos realizar na API
    //Buscar usuarios
    //Cadastrar novos usuários
    //Ralizar login


    static burcarUsuarios(){
        return cy.rest('GET', URL_USUARIO);
    }

    static buscarUsuarioPorNome(){
        return cy.rest('GET', `${URL_USUARIO}/`)
    }

    static buscarUsuarioPorId() {
        return cy.rest('GET', `${URL_USUARIO}/1`);
    }

    static buscarUsuarioPorNome9(){
        return cy.rest('GET', `${URL_USUARIO}/search?q=`)
    }

    static logar(usuario){
        return cy.rest('POST', URL_LOGIN, usuario)
    }

    static salvaBearer(res) {
        Cypress.env('bearer', res.body.token)
        cy.log(res.body.token)
    }
}