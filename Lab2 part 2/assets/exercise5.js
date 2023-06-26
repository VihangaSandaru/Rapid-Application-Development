function ex1(){
    
    let d = new Date;
    let hr= d.getHours;
    if(hr<10)
    {
        window.alert("Good morning");
    }else if(hr<20)
    {
        window.alert("Good bye");
    }else{
        window.alert("Good evening");
    }
}

function ex2(){
    var fruit = window.prompt("Enter one fruit:Banana,Pinapple,Apple");
    switch(fruit){
        case "Banana":
            window.alert("Yellow");
            break;
        case "Pinapple":
            window.alert("Orange"); 
            break;
        case "Apple":
            window.alert("Green");
            break;
        default:
            window.alert("Incorrect");    



    }   
}

function ex3(){
    let num1 = window.prompt("Enter the first number:");
    let num2 = window.prompt("Enter the second number:");
    let num3 = window.prompt("Enter the third number:");

    if(num1>num2 && num1>num3){
        window.alert(num1+" is the largest number");
    }else if(num2>num1 && num2>num3){
        window.alert(num2+" is the largest number");
    }else{
        window.alert(num3+" is the largest number");
    }

}
function ex4(){
    let num = window.prompt("Enter a number");
    let i =1;
    let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    } 
    if(count==2){
        window.alert(num+" is a prime number");
    }else{
        window.alert(num+" is not a prime number");
    }
}
function ex5(){
    let num=1;
    for(num=1;num<=30;num++){
        if(num%2==1){
            document.write(num +"<br>");
        }
    } 
}

function ex6(){
    const names =["Anne","Jhone","Steve","Marine"];

    for(Element in names){
        document.write(names[Element]+"<br>");
    }

}

function ex7(){
    const numbers =[80,30,40,50,23];
    for(Element in numbers){
        document.write(numbers[Element]+" ");
    }
    document.write("<br>");

    numbers[2]=78;
    
    for(Element in numbers){

        document.write(numbers[Element]+" ");
    }
    document.write("<br>");

    document.write("Length of the array :"+ numbers.length);
    document.write("<br>");
    numbers.sort();
    for(Element in numbers){
        document.write(numbers[Element]+" ");
    }
}

function ex8(){
    const names=["sadun","kamal","nimal","ruwan"];
    for(Element in names){
        document.write(names[Element]+" ");
    }
    let len =  names.length;
    names[len-1]=null;
    document.write("<br>");
    for(var i=0;i<len;i++){
        document.write(names[i]+" ");
    }
    names[len-1]="nuwani";
    document.write("<br>");
    for(var i=0;i<len;i++){
        document.write(names[i]+" ");
    }
}

function ex9(){
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    
    const merge_array = myGirls.concat(myBoys);
    for(Element in merge_array){
        document.write(merge_array[Element]+" ");
    }

}

function ex10(){
    const numbersArray = [1,13,22,123,49];
    document.write("Array :");
    for(Element in numbersArray){
        document.write(numbersArray[Element]+" ");
    }

    let sum=0;
    for(let i=0;i<numbersArray.length;i++){
        sum=sum+numbersArray[i];
    }
    document.write("<br>"+"sum of array : " + sum);
}