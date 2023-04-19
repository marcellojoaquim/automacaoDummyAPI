export default class ValidaDummy {
    //Validações das ações que podemos realizar na API
    //Validar a busca por usuarios
    //Validar cadastro de novos usuários
    //Validar a realização de login


    static validaBuscaDeUsuario(res) {
        expect(res).to.be.a('object')
        expect(res.body.total).to.be.a('number')
        expect(res.body.total).to.be.greaterThan(3)
        expect(res.body).to.haveOwnProperty("total")
        expect(res.body).to.haveOwnProperty("skip")
        expect(res.body).to.haveOwnProperty("limit")
    }

    static validaBuscaDeUsuarioPorId(res) {
        expect(res).to.be.a('object')
        expect(res.body.id).to.be.a('number')
        expect(res.body).to.haveOwnProperty("firstName")
        expect(res.body).to.haveOwnProperty("email")
        expect(res.body).to.haveOwnProperty("age")
    }

    static validaLogin(res) {
        expect(res.body).to.haveOwnProperty("id")
        expect(res.body.id).to.be.a("number")
        expect(res.body).to.haveOwnProperty("token")
        expect(res.body).to.haveOwnProperty('email')
    }

    static validaBuscaPorNome(res) {
        cy.fixture('usuario.json').then(json => {
            const nome = {
                nome: json.firstName
            }
            expect(res).to.be.a('object');
            expect(res.body.users[0].firstName).to.be.eq(nome.nome)
        })

    }

}
