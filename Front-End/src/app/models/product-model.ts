export class ProductModel {
    constructor (_id ="",name ="",cod=0,description ="",img ="",value = 0){

        _id = _id;
        cod = cod;
        name = name;
        description = description;
        img = img;
        value = value;
    }

    _id: String;
    cod: Number;
   name: String;
    description: String;
    img: String;
    value: Number;
}
