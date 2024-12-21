const userModel = require('../models/user.model')

///create user//
module.exports.createUser = async ({
    firstname, lastname,email,password
}) =>{
    if (!firstname || !email || !password) {
        throw new Error('Please provide all fields');
}
const user = userModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password
})

    return user;
}