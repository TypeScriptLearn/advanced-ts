// ------
const fruits: string[] = ['apple', 'watermelon', 'banana', 'mango'];
const animals: Array<string> = ['cat', 'dog'];

// ------
const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Hello from Promise');
  }, 2000);
});
promise.then(data => console.log(data));

// -------
const catOne = { name: "Cat" };
const catTwo = { age: 4 };

function mergeObjects<T extends object, R extends object>(primo: T, secondo: R): T & R {
  return Object.assign({}, primo, secondo);
}

const resultCat = mergeObjects(catOne, catTwo);
const resultAny = mergeObjects({ code: 12 }, { population: 100000 });
const resultWrong = mergeObjects( 'sss', 'ffff' ); // wrong type

console.log(resultCat);
