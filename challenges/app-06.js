const carObject = {
    make:"Porsche",
    model:"Cayenne",
    year: 2024,
    color: ['crayon', 'red'],
    hybrid: true,
    drive: function(){
        console.log('driving...');
    },
    stop: function () {
        console.log('using the brakes...');
    }
};

console.log(carObject.make);
console.log(carObject.color[1])

carObject.drive();
carObject.stop();