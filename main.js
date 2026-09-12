import './script.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './modal.js';

class man {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    biography() {
        console.log(`Имя: ${this.name}, возраст: ${this.age} `)
    }
}

class superman extends man {
    constructor(name,age,superpower) {
        super(name,age) 
        this.superpower = superpower;
    }
    superbiography() {
        console.log(`Имя: ${this.name}, возраст: ${this.age} `)
    }
    super() {
        super.biography();
        console.log(`Его сверхспособность: ${this.superpower}`)
    }
}

const me = new man('Расул', '23');
me.biography()

const sups = new superman('Кларк', '30', 'Сверхсила')
sups.superbiography()
sups.super()