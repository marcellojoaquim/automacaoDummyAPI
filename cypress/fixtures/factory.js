const faker = require('@faker-js/faker')


export default class Factory {

    static gerarUser() {

        return {
            "id": faker.datatype.uuid(),
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "age": faker.datatype.number(50),
            "gender": faker.name.sexType(),
            "email": faker.internet.email(),
            "username": "jissetts",
            "password": "ePawWgrnZR8L",
            "birthDate": faker.date.birthdate(),
            "eyeColor": "Amber",
            "hair": {
                "color": "Black",
                "type": "Straight"
            }
        }
    }
}