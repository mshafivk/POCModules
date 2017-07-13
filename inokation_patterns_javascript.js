// function invokation

var value =100;
function outer() { //outer function
	var value = 0;
	function invoke() {
		console.log(value);
	}
	invoke();//1 outer is sets value=0 to window during declaration
}


//calls outer function
outer();


// 2  => function invokation inside method invokation

var value =100;
let app = {
    value:0,//assign props to obj
	 outer: function () { //outer function
		console.log("Object invokation calls property with this ->" + this.value);
		function invoke() {
			console.log( "Called function invokation - it picks from window obj :" + this.value);
		}
		invoke();//Function invokation
    }
}


//method invokation
app.outer();


//INDIRECT INVOCATION PATTERN
//call apply bind

function square(x) {
	return x*x;
}

square.apply(null, [5]);

   let mark =90;
   let student = {
   mark: 50,
   updateMark: function (newMark) {
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
   }
   else {
   	return 'F'
   }
   }
   //object invokation with call invokation (indirect invokation)
   console.log(getGrade.call(student));
   //sets new value
   student.updateMark(65);
   console.log(getGrade.apply(student));