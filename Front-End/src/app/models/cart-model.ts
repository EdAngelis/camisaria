export class CartModel {
    constructor (_id ="",cod=0,name ="",description ="",img="",qtd =1,value = 0, total=0){

        _id = _id;
        cod = cod;
        name = name;
        description = description;
        img = img
        qtd = qtd;
        value = value;
        total = total
    }

    _id: String;
    cod: Number;
   name: String;
    description: String;
    img: String;
    qtd: number;
    value: Number;
    total:Number;
}

