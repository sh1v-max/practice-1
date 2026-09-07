// Task 2: Add a private age to Animal using constructor shorthand, and a
// public getAge(): number method to read it (since age itself isn't
// accessible from outside).

class Animal {
  // constructor param shorthand: adding `protected`/`private` here auto-declares
  // AND assigns the property in one step — no separate field declaration or
  // `this.x = x` needed
  constructor(protected name: string, private age: number) {}

  makeSound(): string {
    return `${this.name} makes a sound`;
  }

  // public (default) — the only way outside code can read `age`, since
  // `age` itself is private and inaccessible directly
  getAge(): number {
    return this.age;
  }
}

const a = new Animal("Rex", 3);
console.log(a.makeSound()); // "Rex makes a sound"
console.log(a.getAge()); // 3
// a.age; // Error: 'age' is private and only accessible within class 'Animal'

export {};

