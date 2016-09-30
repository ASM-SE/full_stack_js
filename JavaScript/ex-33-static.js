
function Circle(radius){
  this.Radius = radius;
  Circle.PI = 3.141; //statico mas é diferente de static?
  //detes modo a variável PI será compartilhada com todas as instancias de objetos
  //do tipo Circle, ou seja, será único para todos os objetos criados.

  this.CalculateArea = function(){
    return Circle.PI * this.Radius * this.Radius;
  }
}

var circle = new Circle(10);

console.log(circle.CalculateArea());
