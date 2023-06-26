let Area=getArea(55);
function getArea(radious){
    return (22.0/7)*radious*radious;
}
document.write(Area);
document.write("<br>");

let Perimeter=getPerimeter(17);
function getPerimeter(radious){
    return 2*(22.0/7)*radious;
}
document.write(Perimeter);
document.write("<br>");

let vol=getVolume(5);
function getVolume(lenth){
    return lenth*lenth*lenth;
}
document.write(vol);
document.write("<br>");

function message(){
    alert("Hello, welcome to our paradise");
}
message();