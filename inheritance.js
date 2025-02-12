class Teacher{
    constructor(name){
        this.name=name;
    }
    tName(){
        return (`Hi, Mrs ${this.name}`);
    }
}
class minister extends Teacher{

    mins(){
        return (`Mr ${this.name} is a teacher`);
    }
}

const teach= new minister("Sabuj","dsdc");
console.log(teach.tName());
console.log(teach.mins());
