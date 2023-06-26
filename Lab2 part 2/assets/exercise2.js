let Mark1,Mark2,Mark3;
Mark1=30;
Mark2=40;
Mark3=90;

document.write("Total = ");
document.write(Mark1+Mark2+Mark3);
document.write("<br>");

document.write("Average : ");
document.write((Mark1+Mark2+Mark3)/3);
document.write("<br><br>");

let Name,age,gender;
Name="sandaru";
age=22;
gender="male";

document.write(Name);
document.write("<br>");
document.write(age);
document.write("<br>");
document.write(gender);
document.write("<br>");


function display(){
    console.log("lllllllll");
    var width=window.prompt("Enter the width : ");
    var height=window.prompt("Enter the height : ");

    alert("Area = " + width*height);

}

document.write("<button id='ss' >Click here for calculate the area</button>");
document.write("<br><br><br>");
document.getElementById("ss").onclick=function(){
    display();
}

var a,b;
a=10;
b=20;

document.write("a += b : " + (a+=b));
document.write("<br>");
document.write("a -= b : " + (a-=b));
document.write("<br>");
document.write("a += b : " + (a+=b));
document.write("<br>");
document.write("a *= b : " + (a*=b));
document.write("<br>");
document.write("a /= b : " + (a/=b));
document.write("<br>");
document.write("a %= b : " + (a%=b));
document.write("<br><br>");

var x=5;
var y=4;
var text1="A";
var text2="B";

document.write(x>=y);
document.write("<br>");
document.write(x!=y);
document.write("<br>");
document.write(text1<text2);
document.write("<br><br>");

var statement1="What a very ";
var statement2="nice day";
document.write(statement1 + statement2);
document.write("<br><br>");

x=5+5;
document.write(x);
document.write("<br>");
y="5"+5;
document.write(y);
document.write("<br>");
z="Hello"+5;
document.write(z);
document.write("<br>");



