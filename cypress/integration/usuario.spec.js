/// <reference types="Cypress" />
import Dummy from "../services/dummy.services";
import ValidaDummy from "../services/validaDummy.services";
import Factory from "../fixtures/factory";

describe('Casos de teste sobre a rota /usuarios com resultados validos', () =>{

    it('Deve retornar os usuarios cadastrados', () => {
        Dummy.burcarUsuarios().then(res => {
            ValidaDummy.validaBuscaDeUsuario(res)
            cy.log(res)
        })
    })
})