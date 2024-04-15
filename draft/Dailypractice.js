let calculator = {
    a: 0,
    b: 0,
    read: function (num1, num2) {
        this.a = num1;
        this.b = num2;
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );