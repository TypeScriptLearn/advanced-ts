function AwesomeDecor(constructor: Function) {
  // console.log(constructor);
}

function AwesomeDecoratorProperty(target: object, property: string | symbol) {
  console.log(target); // => 'name'
  console.log(property);
}

function AwesomeDecoratorMethod(target: object, property: string | symbol, descriptor: PropertyDescriptor) {
  // console.log(target);
  // console.log(property); // => 'name'
  // console.log(descriptor);
}

function AwesomeDecoratorGetter(target: object, property: string | symbol, descriptor: PropertyDescriptor) {
  // console.log(target);
  // console.log(property);
  // console.log(descriptor);
}

@AwesomeDecor
class AwesomeClass {
  @AwesomeDecoratorProperty
  name: string;

  constructor(value: string) {
    this.name = value;
  }

  @AwesomeDecoratorGetter
  get getAwesomeClassName(): string {
    return this.name;
  }

  @AwesomeDecoratorMethod
  awesomeClassHello(): void {
    console.log(`Hello from awesome class with name ${this.name}`);
  }
}
