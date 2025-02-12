// প্যারেন্ট ক্লাস
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} কোনো শব্দ করছে।`);
    }
}

// চাইল্ড ক্লাস ১
class Dog extends Animal {
    speak() {
        console.log(`${this.name} ঘেউ ঘেউ করছে।`);
    }
}

// চাইল্ড ক্লাস ২
class Cat extends Animal {
    speak() {
        console.log(`${this.name} মিউ মিউ করছে।`);
    }
}

// চাইল্ড ক্লাস ৩
class Cow extends Animal {
    speak() {
        console.log(`${this.name} হাম্বা হাম্বা করছে।`);
    }
}

// উদাহরণ
const animals = [
    new Animal('Hamba'),
    new Dog('টমি'),
    new Cat('মিনি'),
    new Cow('গরু')
];

animals.forEach(animal => animal.speak());

// আউটপুট:
// টমি ঘেউ ঘেউ করছে।
// মিনি মিউ মিউ করছে।
// গরু হাম্বা হাম্বা করছে।
