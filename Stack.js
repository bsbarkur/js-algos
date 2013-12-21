function Stack1() {
  this.stack1 =[];
}

Stack1.prototype = {
push: function () {
	      alert(arguments.length);
	      for(i = 0; i< arguments.length; i++) {
		      this.stack1.push(arguments[i]);
	      }
      },

print: function() {
	       //alert(this._stack);  
	       console.log(this._stack);  
       },

pop: function() {
	     //alert(this._stack.length-1);
	     //alert(this._stack[this._stack.length-1]);
	     this.stack1.pop(this.stack1[this.stack1.length-1]);
	     alert(this.stack1);
     }
};

var obj = new Stack();
var obj1 = new Stack1();

/*Testing the stack*/
obj.push(3,2,5);
obj1.push(2,5);
ob1.pop();
obj.print();
obj1.print();
