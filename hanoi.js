function HanoiGame(){
  this.towers = [[3,2,1][][]]

};

var readline = require('readline')

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

HanoiGame.prototype.promptMove = function (callback) {
  this.print();

  reader.question("Where do you want to move the disk from?", function(fromDisk){
    var startTowerIdx = parseInt(fromDisk);
    reader.question("Where do you want to move the disk to?", function(toDisk){
      var endTowerIdx = parseInt(toDisk);
      callback(startTowerIdx, endTowerIdx);
    });
  });
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  var beginTower = this.towers[startTowerIdx];
  var endTower = this.towers[endTowerIdx];

  if (beginTower.length === 0){
    return false;
  }
  else if (endTower.length === 0){
    return true;
  }
  else{
    return beginTower[beginTower.length-1] < endTower[endTower.length-1];
  }

};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (isValidMove(startTowerIdx, endTowerIdx)) {
    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
    return true;
  }
  else{
    return false;
  }

};

HanoiGame.prototype.print = function(){

  console.log(JSON.stringify(this.towers));
};

HanoiGame.prototype.isWon = function(){
  if (this.towers[0].length === 0){
    (this.towers[1].length === 0) || (this.towers[2].length === 0);
  }

};

HanoiGame.prototype.run = function(completionCallback) {
  this.promptMove(function(startTowerIdx, endTowerIdx){
    if (!this.move(startTowerIdx,endTowerIdx)) {
      console.log("Invalid");
    }
    if(this.isWon()) {
      this.print();
      console.log("Game over");
      completionCallback();
    }
    else {
      this.run(completionCallback);
    }

  }).bind(this);

};
