class parent{
    constructor(){
        this.fullName = "justin Biber";
    }
}

class child extends parent{
    constructor(name){
        super();
        this.herFullName = name;
    }
    getAllElement(){
        return this.fullName +" " + this.herFullName;
    }
}

const baby = new child("singer");
console.log(baby.getAllElement());