export default class ValidaDummy {
    //Validações das ações que podemos realizar na API
    //Validar a busca por usuarios
    //Validar cadastro de novos usuários
    //Validar a realização de login

    static validaBuscaDeUsuario(res){
        expect(res).to.be.a('object')
        expect(res.body.total).to.be.a('number')
        expect(res.body.total).to.be.greaterThan(3)
        expect(res.body).to.haveOwnProperty("total")
        expect(res.body).to.haveOwnProperty("skip")
        expect(res.body).to.haveOwnProperty("limit")
    }
}
