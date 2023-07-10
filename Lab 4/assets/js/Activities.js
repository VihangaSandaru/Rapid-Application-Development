//----------------------------Activity 01-----------------------------

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }
}

function Act1Que1(){
    const rec1= new Rectangle("10","25");
    window.alert(rec1.width);
}

document.getElementById("A1que01").onclick=function(){
    Act1Que1();
}

//--------------------------Activity 02-------------------------------

function Act2Que1(){
    const rec2= new Rectangle("9","35");
    const rec3= new Rectangle("11","12");

    window.alert("Area of rectangle 1 is "+rec2.getArea());
    window.alert("Area of rectangle 2 is "+rec3.getArea());
}

document.getElementById("A2que01").onclick=()=>{
    Act2Que1();
}

//-------------------------- Activity 03 -----------------------------

class Dogs{
    constructor(breed,age,color){
        this.breed=breed;
        this.age=age;
        this.color=color;
    }

    Eat(){
        return this.breed+" is eating";
    }
    Sleep(){
        return this.breed+" is sleeping";
    }
    Sit(){
        return this.breed+" is sitting";
    }
    Run(){
        return this.breed+" is running";
    }

}
function Act3que1(){
    const dog1=new Dogs("Pug","3 Years","Black");
    const dog2=new Dogs("Boxer","2 Years","White");
    const dog3=new Dogs("Poodle","1 Year","Brown");

    window.alert(dog1.Eat());
    window.alert(dog2.Run());
    window.alert(dog3.Sit());
}

document.getElementById("A3que01").onclick=()=>{
    Act3que1();
}

//-------------------------- Activity 04 -----------------------------

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


