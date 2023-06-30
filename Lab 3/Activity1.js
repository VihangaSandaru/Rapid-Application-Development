//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Activity 1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// --------------------------------Question 1 -----------------------------------------------------------
function concat(s1,s2){
    return s1+" "+s2;
}

function que1(){
    var var1=window.prompt("Enter the string 1 : ");
    var var2=window.prompt("Enter the string 2 : ");

    document.write(concat(var1,var2));
    document.write("<br>");
}
document.getElementById("question1").onclick=function(){
    que1();
}

//---------------------------------Question 2.a -----------------------------------------------------------

function convertToLower(s1){
         return s1.toLowerCase();
     }

function que2a(){
    var var1=window.prompt("Enter the Upper case string : ");
    document.write(convertToLower(var1));
}
document.getElementById("question2.a").onclick=function(){
    que2a();
}

// ---------------------------------- Qusetion 2.b ---------------------------------------------------------

function convertToUpper(s1){
    return s1.toUpperCase();
}
function que2b(){
    var var1=window.prompt("Enter the lower case string : ");
    document.write(convertToUpper(var1));
}
document.getElementById("question2.b").onclick=function(){
    que2b();
}

//----------------------------------- Question 2.c ---------------------------------------------------------

function splitByCommas(str) {
    const result = str.split(',');
    return result;
  }

function que2c(){
      const inputString=window.prompt("Enter the string : ");
      var splitArray = splitByCommas(inputString);
      document.write(splitArray);
      
}
document.getElementById("question2.c").onclick=function(){
    que2c();
}

//---------------------------------- Question 2.d ----------------------------------------------------------

function getIndex(str,word){
    var k=str.indexOf(word);
    return k;
}

function que2d(){
    var str1=window.prompt("Enter the string : ");
    var word1=window.prompt("Enter the word : ");

    document.write("Starting index of the "+ '"' + word1 + '"' +" is : "+getIndex(str1,word1));
}
document.getElementById("question2.d").onclick=function(){
    que2d();
}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Activity 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//------------------------------------------ Question 1 ---------------------------------------------------

function result(b1,b2){
    return Boolean(b1*b2==1);
}

function A2que1(){
    var val1=window.prompt("Enter the first boolian value : ");
    var val2=window.prompt("Enter the second boolian value : ");
        window.alert(result(val1,val2));
        
}

document.getElementById("A2question1").onclick=function(){
    A2que1();
}

//--------------------------------------------Question 2 -----------------------------------------------------

function dataType(val1){
    return typeof +val1;
}
function A2que2(){
    var1=window.prompt("Enter the nutural number : ");
        if(var1 > 0){
            window.alert(dataType(var1));
        }
        else{
            window.alert("Wrong input ");
        }
}
document.getElementById("A2question2").onclick=function(){
    A2que2();
}

//--------------------------------------------- Question 3 ---------------------------------------------------

function A2que3(){
    const date=new Date();
    window.alert("Type of date is "+ dataType(date));
}
document.getElementById("A2question3").onclick=function(){
    A2que3();
}

//-------------------------------------------- Question 4 ----------------------------------------------------

function A2que4(){
    var str="OceanGate";
    if(str.length>10){
        window.alert("Length is greater than 10");
    }
    else{
        window.alert("Length is lower than 10");
    }
}

document.getElementById("A2question4").onclick=function(){
    A2que4();
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Activity 3 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//-------------------------------------------- Question 1 --------------------------------------------------

function A3que1(){
    const games=["The Last of Us","Uncharted","God of War","Bloodborne"];
    
    window.alert("Index of 'god of war' is : " + games.indexOf("God of War"));
}

document.getElementById("A3question1").onclick=function(){
    A3que1();
}

//-------------------------------------------- Question 2 -------------------------------------------------


function A3que2(){
    const details= new Map([
        ["Name",window.prompt("Enter the name : ")],
        ["Age",window.prompt("Enter the age : ")],
        ["City",window.prompt("Enter the city : ")]
    ]);
    window.alert("Name = "+details.get("Name")+"\nAge = "+details.get("Age")+"\nCity = "+details.get("City"));

}
document.getElementById("A3question2").onclick=function(){
    A3que2();
}

//------------------------------------------- Question 3 -------------------------------------------------












//------------------------------------------- Question 4 --------------------------------------------------

function A3que4(){
    const fruits=new Map([

    ]);
    fruits.set("Apple",5);
    fruits.set("Banana",3);
    fruits.set("Orange",2);

    window.alert("Value of the key 'Banana' is : "+fruits.get("Banana")+"\nSize of the map = "+fruits.size);
}

document.getElementById("A3question4").onclick=function(){
    A3que4();
}