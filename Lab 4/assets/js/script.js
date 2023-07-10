// class Vehicle{

//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return ('The name of the bike is '+this.name);
//     }
// }

// const bike1= new Vehicle("Hornet","Honda","1500cc");
// const bike2 = new Vehicle("Discovery","Bajaj","250cc");

// console.log(bike1.name);
// console.log(bike2.engine);
// console.log(bike1.getDetails());




// class Shape{
//     constructor(color){
//         this.color=color;
//     }
//     getColor(){
//         return this.color;
//     }
// }

// class Rectangle extends Shape{
//     constructor(color,width,height){
//         super(color);
//         this.width=width;
//         this.height=height;
//     }
//     getArea(){
//         return this.width*this.height;
//     }
// }

// class Circle extends Shape{
//     constructor(color,radius){
//         super(color);
//         this.radius=radius;
//     }
//     getArea(){
//         return Math.PI*this.radius*this.radius;
//     }
// }

// s1=new Shape("Red");
// document.getElementById("a").innerHTML= s1.getColor();

// r1=new Rectangle(s1.getColor,10,20);
// document.getElementById("a").innerHTML +="  "+ r1.getArea();

// c1=new Circle(s1.getColor,5);
// document.getElementById("a").innerHTML += "  "+c1.getArea();





class Employee{
    constructor(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch){
        this.EmpNum=EmpNum; 
        this.name=name;
        this.age=age;
        this.address=address;
        this.contNum=contNum;
        this.NIC=NIC;
        this.joinedDate=joinedDate;
        this.salary=salary;
        this.designation=designation;
        this.lunch=lunch;
    }

    takeLeave(LeaveDate,numberOfDays,reason){
        this.LeaveDate=LeaveDate;
        this.numberOfDays=numberOfDays;
        this.reason=reason;
    }

    dutyTime(arrivalTime,leaveTime){
        this.arrivalTime=arrivalTime;
        this.leaveTime=leaveTime;
    }

    }
}

class permanentEmployee extends Employee{
    constructor(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch){
        super(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch);
        
    }
    
}

class contractEmployee extends Employee{
    constructor(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch){
        super(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch);
        this.duration="1 year";
    }
    requestExtension(){
        this.duration="1 year and 3 months";
    }
}

class temporaryEmployee extends Employee{
    constructor(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch){
        super(EmpNum,name,age,address,contNum,NIC,joinedDate,salary,designation,lunch);
        this.duration="6 months";
    }
    requestExtension(){
        this.duration="9 months";
    }
}





