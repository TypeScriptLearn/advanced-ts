// ------
const fruits: string[] = ['apple', 'watermelon', 'banana', 'mango'];
const animals: Array<string> = ['cat', 'dog'];

// ------
// типизация Promise при помощи Generic типа string
const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Hello from Promise');
  }, 2000);
});
promise.then(data => console.log(data));

// -------
// Generic с типизацией стандартными интерфейсами
const catOne = { name: "Cat" };
const catTwo = { age: 4 };

function mergeObjects<T extends object, R extends object>(primo: T, secondo: R): T & R {
  return Object.assign({}, primo, secondo);
}

const resultCat = mergeObjects(catOne, catTwo);
const resultAny = mergeObjects({ code: 12 }, { population: 100000 });
const resultWrong = mergeObjects( 'sss', 'ffff' ); // wrong type

console.log(resultCat);

// --------
// Generic с типизацией кастомнымными интерфейсами
interface ILength {
  length: number;
}

function calculateLength<T extends ILength>(value: T): { value: T, length: string } {
  return {
    value,
    length: `Length of object is ${value.length ?? 'no length'}`,
  };
}

console.log(calculateLength('Hello world'));
console.log(calculateLength(['apple']));
console.log(calculateLength({ name: 'Gosha' })); // ошибка -> отсутствует обязательное поле length, как это указано в интерфейсе ILength
console.log(calculateLength({ name: 'Gosha', age: 22, length: 180 })); // объект хз какой, но с точки зрения TS правильный, так как соответствует интерфейсу ILength -> присутствует обязательное поле length

// ---------
// --- ???
const person = {
  name: 'John',
  age: 20
}

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key] ?? 'no such key in this object';
}

console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, "location")); // ошибка, так как в переданном объекте нет такого ключа

// ------
// Generics в классах
class ItemsCollection<T extends string | number> {
  constructor(private items: T[] = []) {}

  get getItems(): T[] {
    return [...this.items];
  }

  set addItem(item: string | number) {
    this.items.push(<T>item);
  }

  removeItem(removedItem: T): void {
    this.items = this.items.filter((item: T) => item !== removedItem);
  }
}

const apples = new ItemsCollection(['apple', 'mango', 'kiwi']);
apples.addItem = 'banana';
console.log(apples.getItems);

const bricks = new ItemsCollection<number>([10, 20, 30]);
bricks.addItem = 40;
console.log(bricks.getItems);

// -------
// Partial
// -------
interface IVine {
  title: string;
  year: number;
}

function createVine(title: string, year: number): IVine {
  const newVine: Partial<IVine> = {};
  if (title.length > 3) {
    newVine.title = title;
  }
  if (year <= 2015) {
    newVine.year = year;
  }
  return <IVine>newVine;
}

console.log(createVine('Menlo', 1995));
