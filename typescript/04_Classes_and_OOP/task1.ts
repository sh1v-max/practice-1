// Task 1: Create a class Animal with a protected name and a method makeSound(): string.
// Extend it with a Dog class that overrides makeSound().

class Animal {
  protected name: string; // reachable in Animal AND any subclass, not outside

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  // same signature as the parent method — this REPLACES it for Dog instances
  makeSound(): string {
    return `${this.name} barks`; // `this.name` works because it's protected, not private
  }
}

const generic = new Animal("Creature");
console.log(generic.makeSound()); // "Creature makes a sound"

const d = new Dog("Rex");
console.log(d.makeSound()); // "Rex barks" — overridden version runs
// d.name; // Error: 'name' is protected, only accessible within Animal/Dog

export {};

