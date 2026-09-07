// Task 3: Define interface Soundable { makeSound(): string } and make a
// Cat class implements it, unrelated to the Animal hierarchy.

interface Soundable {
  makeSound(): string;
}

// `implements` gives no inherited code (unlike `extends`) — it just makes TS
// enforce that Cat provides every member Soundable requires
class Cat implements Soundable {
  makeSound(): string {
    return "Meow";
  }
}

const c = new Cat();
console.log(c.makeSound()); // "Meow"

// any unrelated class can also implement Soundable without sharing a base class:
class Robot implements Soundable {
  makeSound(): string {
    return "Beep boop";
  }
}
console.log(new Robot().makeSound()); // "Beep boop"

function announce(s: Soundable): void {
  console.log(s.makeSound());
}
announce(c); // works — Cat satisfies the Soundable shape
announce(new Robot()); // works too — so does Robot

export {};

