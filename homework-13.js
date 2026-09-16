class Drink {
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.temperature = temperature;
    }

    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.temperature}`;
    }

    getTemperature() {
        return `${this.temperature}°C`
    }
    setTemperature(newTemperature) {
        if(typeof newTemperature === 'number') {
            this.temperature = newTemperature;
        } else {
            console.error("Ошибка: Температура должна быть числом!");
        }
    }
    prepare() {
        return `Напиток ${this.name} успешно приготовлен при температуре ${this.temperature}°C.`;
    }

    serve() {
        const prepareSteps = this.prepare();
        return `Напиток ${this.name} подан. Приятного аппетита!`;
    }

}
const Water = new Drink("Вода", "500 мл", 1.5, 10);
console.log(Water.getInfo());
console.log(Water.getTemperature());
Water.setTemperature(5);
console.log(Water.getTemperature());
console.log(Water.prepare());
console.log(Water.serve());


class Limonade extends Drink {
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);
        this.flavor = flavor;
    }
}

const Lemonade = new Limonade("Лимонад", "330 мл", 2.5, 5, "Лимон");
console.log(Lemonade.getInfo());
console.log(`Вкус: ${Lemonade.flavor}`);

class cola extends Drink {
    constructor(name, size, price, temperature, sugarContent) {
        super(name, size, price, temperature);
        this.sugarContent = sugarContent;
    }
}

class pepsi extends cola {
    constructor(name, size, price, temperature, sugarContent, isDiet) {
        super(name, size, price, temperature, sugarContent);
        this.isDiet = isDiet;
    }
}

class tea extends Drink {
    constructor(name, size, price, temperature, type) {
        super(name, size, price, temperature);
        this.type = type;
    }
}

class coffee extends Drink {
    constructor(name, size, price, temperature, location) {
        super(name, size, price, temperature);
        this.location = location    ;
    }

    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.temperature}, Место приготовления: ${this.location}`;
    }

    order() {
        return `Заказ принят: Кофе ${this.name} готовится. Пожалуйста, подождите.`;
    }
}

const Espresso = new coffee("Эспрессо", "30 мл", 3.0, 90, "Италия");
console.log(Espresso.getInfo());
console.log(Espresso.order());
