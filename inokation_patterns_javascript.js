// function invokation
var value = 100;

function outer() { //outer function
    var value = 0;

    function invoke() {
        console.log(value);
    }
    invoke(); //1 outer is sets value=0 to window during declaration
}
//calls outer function
outer();
// 2  => function invokation inside method invokation
/*
 *  If there are dots in your function call, your function context will be the right-most element of your dots chain.
 */
var value = 100;
let app = {
        value: 0, //assign props to obj
        outer: function() { //outer function
            console.log("Object invokation calls property with this ->" + this.value);

            function invoke() {
                console.log("Called function invokation - it picks from window obj :" + this.value);
            }
            invoke(); //Function invokation
        }
    }
    //method invokation
app.outer();

//2.2
var value = 122;
let app = {
        value: 0, //assign props to obj
        outer: { //outer function
            value: 128,
            inner: function() {
                console.log("Called function invokation - outer object :" + this.value); //logs 128
            }
        }
    }
    //method invokation
app.outer.inner();



//3=> INDIRECT INVOCATION PATTERN
//call apply bind
function square(x) {
    return x * x;
}
square.apply(null, [5]);
let mark = 90;
let student = {
    mark: 50,
    updateMark: function(newMark) {
        console.log(mark);
        this.mark = newMark;
    }
};

function getGrade() {
    //  console.log(mark);//refers to the global
    if (this.mark > 75) {
        return 'A';
    }
    if (this.mark > 60) {
        return 'B';
    } else {
        return 'F'
    }
}
//object invokation with call invokation (indirect invokation)
console.log(getGrade.call(student));
//sets new value
student.updateMark(65);
console.log(getGrade.apply(student));
/*
4 => Constrctor invocation patterns
Constructor function usually does not have return.
This is used to initialize new object. It always returns a new object.
Even if constructor has return statement with some primitive values,
return statement will be ignored and new created object will be returned.
*/
var Calc = function() {
    var name, sign;
    return console.dir(this);
};
firstCalc = new Calc();
firstCalc.name = "plus";
firstCalc.sign = "+";
secondCalc = new Calc();
secondCalc.name = "minus";
secondCalc.sign = "-";



var Calc = function() {
    var name, sign;
    return console.dir(this);
};

Calc.name = "plus";
Calc.sign = "+";
console.dir(Calc)