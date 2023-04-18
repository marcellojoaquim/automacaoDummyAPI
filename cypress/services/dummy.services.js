import Factory from "../fixtures/factory";

const URL_USUARIO = '/users'

export default class Dummy {
    //Ações que podemos realizar na API
    //Buscar usuarios
    //Cadastrar novos usuários
    //Ralizar login


    static burcarUsuarios(){
        return cy.rest('GET', URL_USUARIO);
    }

    static buscarUsuarioPorId() {
        return cy.rest('GET', `${URL_USUARIO}/1`);
    }
}