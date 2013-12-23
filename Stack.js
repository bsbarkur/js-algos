function Stack() {
  this._stack =[];
}

Stack.prototype = {
push: function () {
	      alert(arguments.length);
	      for(i = 0; i< arguments.length; i++) {
		      this._stack.push(arguments[i]);
	      }
      },

print: function() {
	       //alert(this._stack);  
	       console.log(this._stack);  
       },

pop: function() {
	     //alert(this._stack.length-1);
	     //alert(this._stack[this._stack.length-1]);
	     this._stack.pop(this._stack[this._stack.length-1]);
	     alert(this._stack);
     }
};

var obj = new Stack();
var obj1 = new Stack();

/*Testing the stack*/
obj.push(3,2,5);
obj1.push(2,5);
obj.print();
obj1.print();
