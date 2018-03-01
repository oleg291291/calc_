class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    //this.inValue = initialValue;
    
    this.value = initialValue; // тут ответ
    this.stackArr = [];

    this.calc = function calc(){
      this.stackArr.push(initialValue);
      //mult
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
        var summed = this.stackArr[sumIndex - 1] * this.stackArr[sumIndex + 1]
        this.stackArr[sumIndex - 1] = summed;
        this.stackArr.splice(sumIndex, 2);
        sumIndex = this.stackArr.indexOf(plusStr);
      }
      this.value = this.stackArr[0];
      //return this.stackArr[0]
    }
   // return initialValue;
  }

  add(number) {
    // your implementation
    this.stackArr.push('+')
    this.stackArr.push(number)
    this.calculate();
  }
  
  subtract(number) {
    // your implementation
  }

  multiply(number) {
    // your implementation
    this.stackArr.push('*')
    this.stackArr.push(number)
    this.calculate();
  }

  devide(number) {
    // your implementation
  }

  pow(number) {
    // your implementation
  }
  
}

module.exports = SmartCalculator;

