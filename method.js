// 对象的方法：在一个对象中绑定函数
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age;
xiaoming.age();
