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


      var multStr = "*"
      var multIndex = this.stackArr.indexOf(multStr);
      while(multIndex != -1){
        var multed = this.stackArr[multIndex - 1] * this.stackArr[multIndex + 1]
        this.stackArr[multIndex - 1] = multed;
        this.stackArr.splice(multIndex, 2);
        multIndex = this.stackArr.indexOf(multStr);
      }
      //sum
      var plusStr = '+'
      var sumIndex = this.stackArr.indexOf(plusStr);
      while(sumIndex != -1){
        var summed = this.stackArr[sumIndex - 1] + this.stackArr[sumIndex + 1]
        this.stackArr[sumIndex - 1] = summed;
        this.stackArr.splice(sumIndex, 2);
        sumIndex = this.stackArr.indexOf(plusStr);
      }
      this.result = this.stackArr[0];
     
    }


  add(number) {
    this.stackArr.push('+')
    this.stackArr.push(number)
    this.calc();
    SmartCalculator.valueOf();
    return this;

  }

  subtract(number) {
SmartCalculator.valueOf();
    return this;
  }

  multiply(number) {
    this.stackArr.push('*')
    this.stackArr.push(number)
    SmartCalculator.valueOf();
    return this;
  }

  devide(number) {
SmartCalculator.valueOf();
    return this;
  }

  pow(number) {
SmartCalculator.valueOf();
    return this;
  }

}

SmartCalculator.prototype.valueOf = function () { return this.stackArr[0]};


module.exports = SmartCalculator;

