export class UserModel {
    constructor (_id ="",name ="",email ="",password ="", confirmPass=""){

        _id = _id;
        name = name;
        email = email;
        password = password;
        confirmPass = confirmPass;
    }

    _id: String;
   name: String;
    email: String;
    password: String;
    confirmPass: String;
}
