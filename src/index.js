class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.result = initialValue; // тут ответ
    this.stackArr = [initialValue];

    // this.calc = function calc(){
    //   // this.stackArr.push(initialValue);
    //   //mult
    //   var multStr = "*"
    //   var multIndex = this.stackArr.indexOf(multStr);
    //   while(multIndex != -1){
    //     var multed = this.stackArr[multIndex - 1] * this.stackArr[multIndex + 1]
    //     this.stackArr[multIndex - 1] = multed;
    //     this.stackArr.splice(multIndex, 2);
    //     multIndex = this.stackArr.indexOf(multStr);
    //   }
    //   //sum
    //   var plusStr = '+'
    //   var sumIndex = this.stackArr.indexOf(plusStr);
    //   while(sumIndex != -1){
    //     var summed = this.stackArr[sumIndex - 1] + this.stackArr[sumIndex + 1]
    //     this.stackArr[sumIndex - 1] = summed;
    //     this.stackArr.splice(sumIndex, 2);
    //     sumIndex = this.stackArr.indexOf(plusStr);
    //   }
    //   this.result = this.stackArr[0];
     
    // }

  }

 calc(){
      // this.stackArr.push(initialValue);
      //mult
    //   this.result = initialValue; // тут ответ
    // this.stackArr = [initialValue];

      var calcArr = this.stackArr.slice();
      

      //pow
      while(calcArr.indexOf("pow") != -1){
        var powIndex = calcArr.indexOf("pow");
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

      //sum+
      while(calcArr.indexOf('+') != -1){
        var sumIndex = calcArr.indexOf('+');
        var summed = calcArr[sumIndex - 1] + calcArr[sumIndex + 1]
        calcArr[sumIndex - 1] = summed;
        calcArr.splice(sumIndex, 2);
        sumIndex = calcArr.indexOf('+');
      }
      //subt
      while(calcArr.indexOf("-") != -1){
        var subtIndex = calcArr.indexOf("-");
        var subtracted = calcArr[subtIndex - 1] - calcArr[subtIndex + 1]
        calcArr[subtIndex - 1] = subtracted;
        calcArr.splice(subtIndex, 2);
        subtIndex = calcArr.indexOf("-");
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
    this.stackArr.push('-')
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

