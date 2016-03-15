Array.prototype.uniq = function(){
  var uniqArr = [];
  for(var i = 0; i< this.length; i++){
    var index = this[i];
    if (uniqArr.indexOf(index) === -1){
      uniqArr.push(index);
    }

  }
  return uniqArr;
};

Array.prototype.twoSum = function(){
  var sums = [];

  for(var i = 0; i < this.length; i++){
    for(var x = i; x < this.length; x++){
      if (i===x){
        continue;
      }
      else if (this[i] + this[x] === 0) {
        sums.push([i,x]);
      }

    }
  }
  return sums;
};


Array.prototype.transpose = function(){
  var transArr = [];
  for(var i = 0; i < this.length; i++){
    transArr.push([]);
  }

  for(var i = 0; i < this.length; i++){
    for(var x = 0; x < this[i].length; x++){
      transArr[x].push(this[i][x]);

    }
  }
  return transArr;

};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());

Array.prototype.each = function(fun){
  for(var i = 0; i< this.length; i++){
    fun(this[i]);

  }

  return this;
};

Array.prototype.map = function(fun){

  var mapArr = []

  this.each(function (el)){
    mapArr.push(fun(el));

  }
  return mapArr;
};

Array.prototype.map = function(fun){
  var accu = this[0];

  this.each(function (el)){
    accu = fun(accu, el)

  }
  return accu;
};


Array.prototype.bubbleSort = function(){
  var sorted = false;

  while (!sorted){
    sorted = true;
    for (var i = 0; i < this.length-1; i++){
      if (this[i] > this[i+1]){
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }

  }
  return this;


};

Array.prototype.subStrings = function(){
  var subs = [];

  for(var i = 0; i < this.length, i++){
    for (var x = i; (x+i) < this.length; x++){
      subs.push(this.slice(i, i+x));
    }
  }
  return subs
};

function range(begin, end){

  if (begin === end){
    return []
  }

  var rangeArr = range(begin, end-1);
  rangeArr.push(end-1);
  return rangeArr;
};

function exponent(base, n){

  if (n === 0){
    return 1;
  }
  else if (n === 1){
    return base;
  }
  else if (n % 2 === 0){
    var exp = exponent(base, n/2);
    return exp * exp;
  }
  else{
    var exp = exponent(base, (n-1)/2);
    return exp * exp * base;
  }

};

function bSearch(arr, target){
  if (arr.length === 1){
    if (arr[0] === target){
      return 0
    }
    else {
      return null
    }
  }

    var index = Math.floor(arr.length / 2);
    var mid = arr[index];

    if (target === mid){
      return index;
    }
    else if (target < mid){
      var left = arr.slice(0, index);
      bSearch(left, target);
    }
    else {
      var right = arr.slice(index + 1);
      var tmp = bSearch(right, target);
      if (tmp){
        return index + tmp + 1;
      }

    }
};

function makeChange(target, coins){
  var best = null;

  for (var i = 0; i < coins.length; i++){
    if (coins[i] > target){
      continue;
    }
    else if (target - coins[i] === 0){
      return [coins[i]];
    }
    var solution = [coins[i]].concat(makeChange(target - x, coins));

    if (best === null){
      best = solution;
    }
    best = solution.length < best.length ? solution : best;
  }
  return best;
};

function mergeSort(arr){
  if (arr.length === 0){
    return [];
  }
  else if (arr.length === 1){
    return arr;
  }
  else{
    var midIdx = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,midIdx));
    var right = mergeSort(arr.slice(midIdx+1));

    return merge(left, right);
  }

};

function merge(left, right){
  var output = [];

  while (left.length !== 0 && right.length !== 0){
    if (left[0] > right[0]){
      output.push(right.shift);
    }
    else{
      output.push(left.shift);
    }


  }
  output.concat(left);
  output.concat(right);
  return output;

};

function subsets(arr){
  if (arr.length === 0){
    return [[]];
  }
  else{
    var first = arr[0];
    var subs = subsets(arr.slice(1));
    var newSubs = subs.map(function(subs){
      return [first].concat(subs);

    });
  }
  return subs.concat(newSubs);
};



function Cat(name, owner){
  this.name = name;
  this.owner = owner;

};

Cat.prototype.cuteStatement = function(){
  console.log(this.owner + ' loves ' + this.name)

};

var jack = new Cat("Jack", "Meagan");
var chloe = new Cat("Chloe", "Brandon");

Cat.prototype.meow = function(){
  console.log("meow");
};

jack.meow = function(){
  console.log("purrr");

};

function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function(){
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.enroll = function(course){
  if (this.courses.indexOf(course) === -1){
    this.courses.forEach(function (newCourse) {
      if (newCourse.conflictsWith(course)){
        throw "Can't add course";
      }
    });
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function(){
  var courseLoad = {};
  this.courses.forEach(functions (course){
    var dept = course.dept;
    courseLoad[dept] = courseLoad[dept] || 0;
    courseLoad[dept] += course.credits;
  });
return courseLoad;
};

function Course(name, dept, credits, days, block){
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.days = days;
  this.block = block;
  this.students = [];

};

Course.prototype.addStudent = function (student){
  this.students.push(student);
  student.enroll(this);

};

Course.prototype.conflictsWith = function (otherCourse){
  if (this.block !== other.block){
    return false;
  }

};
