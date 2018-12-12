export class ProductModel {
    constructor (_id ="",name ="",description ="",img ="",valor = 0){

        _id = _id;
        name = name;
        description = description;
        img = img;
        valor = valor;
    }

    _id: String;
   name: String;
    description: String;
    img: String;
    valor: Number;
}
