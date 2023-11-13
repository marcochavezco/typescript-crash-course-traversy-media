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
