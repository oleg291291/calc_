class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.result = 0; 
    this.stackArr = [initialValue];
  }

 calc(){
    

      var calcArr = this.stackArr.slice();
      

      //pow
      while(calcArr.indexOf("pow") != -1){
        var powIndex = calcArr.indexOf("pow");
        if(calcArr[powIndex + 1] == 1){
          while(calcArr[powIndex + 2] == "pow"){
              calcArr.splice(powIndex+2, 2);
            }
          }

        var powed = Math.pow(calcArr[powIndex - 1], calcArr[powIndex + 1]);
        calcArr[powIndex - 1] = powed;
        calcArr.splice(powIndex, 2);
        powIndex = calcArr.indexOf("pow");
      }

      //mult*
      while(calcArr.indexOf("*") != -1){
        var multIndex = calcArr.indexOf("*");
        var multed = calcArr[multIndex - 1] * calcArr[multIndex + 1]
        calcArr[multIndex - 1] = multed;
        calcArr.splice(multIndex, 2);
        multIndex = calcArr.indexOf("*");
      }
//devide/
      while(calcArr.indexOf("/") != -1){
        var devIndex = calcArr.indexOf("/");
        var divided = calcArr[devIndex - 1] / calcArr[devIndex + 1]
        calcArr[devIndex - 1] = divided;
        calcArr.splice(devIndex, 2);
        devIndex = calcArr.indexOf("/");
      }

//subt
      while(calcArr.indexOf("minus") != -1){
        var subtIndex = calcArr.indexOf("minus");
        var subtracted = calcArr[subtIndex - 1] - calcArr[subtIndex + 1]
        calcArr[subtIndex - 1] = subtracted;
        calcArr.splice(subtIndex, 2);
        subtIndex = calcArr.indexOf("minus");
      }
      //sum+
      while(calcArr.indexOf('+') != -1){
        var sumIndex = calcArr.indexOf('+');
        var summed = calcArr[sumIndex - 1] + calcArr[sumIndex + 1]
        calcArr[sumIndex - 1] = summed;
        calcArr.splice(sumIndex, 2);
        sumIndex = calcArr.indexOf('+');
      }
      

      this.result = calcArr[0];
     
    }


  add(number) {
    this.stackArr.push('+')
    this.stackArr.push(number)
    this.calc();
    SmartCalculator.valueOf();
    return this;

  }

  subtract(number) {
    this.stackArr.push('minus')
    this.stackArr.push(number)
    this.calc();
SmartCalculator.valueOf();
    return this;
  }

  multiply(number) {
    this.stackArr.push('*')
    this.stackArr.push(number)
    this.calc();
    SmartCalculator.valueOf();
    return this;
  }

  devide(number) {
    this.stackArr.push('/')
    this.stackArr.push(number)
    this.calc();
SmartCalculator.valueOf();
    return this;
  }

  pow(number) {
    this.stackArr.push('pow')
    this.stackArr.push(number)
    this.calc();
SmartCalculator.valueOf();
    return this;
  }

}

SmartCalculator.prototype.valueOf = function () { return this.result};


module.exports = SmartCalculator;

