let person = {
    firstName: 'Marek',
    lasrName: 'Mostowiak',
    introduce: function (){
        console.log('Nazywam się: ' + this.firstName + ' ' + this.lasrName );
    },
};
person.introduce()
person.firstName = 'Marcin';
person.introduce();

console.log('----------');

function Car(brand,model){
    this.brand = brand;
    this.model = model;

    this.showDetail = function (){
        console.log('Car: ' + this.brand+' '+this.model)
    };

}
let car = new Car('fiat', '126p');
car.showDetail();console.log('--------------------');

class House {
    constructor(windows,doors) {
        this.windows = windows;
        this.doors = doors;
            }
            showDetails(){
                console.log('Dom ma: '+this.windows+' okien i '+this.doors+' drzwi')
            }
}
let house = new House(2,6);
house.showDetails()