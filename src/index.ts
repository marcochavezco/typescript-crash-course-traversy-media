// Basic types
let id: number = 5;
let firstName: string = 'Marco';
let isActive: boolean = true;
let x: any = 'Hello';

// Define types of array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'brad', false];
// Tuple array
let employee: [number, string][];

employee = [
  [1, 'Tom'],
  [2, 'Raul'],
  [3, 'Tomas'],
];

// Enum

// Can be numbers, enum has default value starting with 0, 1, 2, ..., . The starting number could be changed as follows
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// Strings too
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 10,
  name: 'Marco',
};

// Type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'Marco',
};

interface MathFn {
  (x: number, y: number): number;
}

const add: MathFn = (x: number, y: number): number => x + y;
const sub: MathFn = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered`;
  }
}

const marco = new Person(1, 'Marco');

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name); // calling the parent class constructor
    this.position = position;
  }
}

const employee1 = new Employee(2, 'John', 'Developer');

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(['Tom', 'Max', 'Bob']);
