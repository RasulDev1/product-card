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
    #setTemperature(newTemperature) {
        if(typeof newTemperature === 'number') {
            this.temperature = newTemperature;
        } else {
            console.error("Ошибка: Температура должна быть числом!");
        }
    }
    prepare(targetTemperature) {
        if (targetTemperature !== undefined) {
            this.#setTemperature(targetTemperature);
        }
        return `Напиток ${this.name} успешно приготовлен при температуре ${this.temperature}°C.`;
    }

    serve() {
        const prepareSteps = this.prepare();
        return `Напиток ${this.name} подан. Приятного аппетита!`;
    }

}
const water = new Drink("Вода", "500 мл", 1.5, 10);
console.log(water.getInfo());
console.log(water.getTemperature());
water.prepare(5);
console.log(water.getTemperature());
console.log(water.prepare());
console.log(water.serve());


class Limonade extends Drink {
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);
        this.flavor = flavor;
    }
}

const Limon = new Limonade("Лимонад", "330 мл", 2.5, 5, "Лимон");
console.log(Limon.getInfo());
console.log(`Вкус: ${Limon.flavor}`);

class Cola extends Drink {
    constructor(name, size, price, temperature, sugarContent) {
        super(name, size, price, temperature);
        this.sugarContent = sugarContent;
    }
}


class Tea extends Drink {
    constructor(name, size, price, temperature, type) {
        super(name, size, price, temperature);
        this.type = type;
    }
}

class Cafe {
    constructor(cafename, cafelocation) {
        this.cafename = cafename;
        this.cafelocation = cafelocation;
    }

    getInfo() {
        return `Название: ${this.cafename}, Место: ${this.cafelocation}`;
    }

    drinkOrder(drink) {
        return `Заказ принят: ${drink.name} готовится. Пожалуйста, подождите.`;
    }
}

const newCafe = new Cafe("Cafeyurt", "ул. Мужчинская 51");
console.log(newCafe.getInfo());
const order = newCafe.drinkOrder(water);
console.log(order);