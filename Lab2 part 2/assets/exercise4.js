const mammal={
    color:"Orange",
    type:"Cat",
    legs:4,
    name:"kitty",
    speed:24
};
document.write(mammal.type + "<br>");
document.write(mammal.name + "<br><br>");

const person={
    firstName: "John",
    lastName: "Doe",
    id : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
document.write(person.firstName + "<br>");
document.write(person.fullName() + "<br>");
document.write(person.id + "<br>");
document.write(person.lastName + "<br><br>");

const trangle={
    Height:25,
    base:24,
    color:"red",
    area: function(){
        return 0.5*this.Height*this.base;
    }
};

document.write(trangle.Height + "<br>");
document.write(trangle.area() + "<br>");
document.write(trangle.base + "<br>");
document.write(trangle.color + "<br>");