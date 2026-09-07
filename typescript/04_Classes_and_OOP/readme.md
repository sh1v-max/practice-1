# Classes & OOP in TypeScript

How TypeScript adds compile-time enforcement to JavaScript classes — with JavaScript equivalents alongside each concept.

## 1. Class properties & constructors

**JavaScript**
```js
class Animal {
  constructor(name) {
    this.name = name; // no guarantee every instance sets this correctly
  }
}
```

**TypeScript**
```ts
class Animal {
  name: string; // must declare the property's type up front

  constructor(name: string) {
    this.name = name;
  }
}
```

TS forces every property to have a declared type, and the constructor's assignment is checked against it.

## 2. Access modifiers — `public`, `private`, `protected`

**JavaScript** — no real access control (only the `#private` field syntax, which is newer and stricter but limited).

**TypeScript**
```ts
class Animal {
  public name: string;       // accessible anywhere (default if omitted)
  private age: number;       // accessible only inside this class
  protected sound: string;   // accessible in this class AND subclasses

  constructor(name: string, age: number, sound: string) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
}

const a = new Animal("Rex", 3, "Bark");
a.name;  // OK
a.age;   // Error: 'age' is private
```

- `public` (default): open to everyone.
- `private`: only this exact class's own methods can touch it — not even subclasses.
- `protected`: this class AND any subclass can touch it, but outside code can't.

## 3. Constructor parameter shorthand

**TypeScript**
```ts
class Animal {
  // adding a modifier directly on a constructor param auto-declares AND assigns the property
  constructor(protected name: string, private age: number) {}
}
```
Equivalent to writing out the property declarations and `this.x = x` assignments manually — just shorter.

## 4. Inheritance — `extends`

**TypeScript**
```ts
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    // overrides the parent method; `super` calls the parent's version if needed
    return `${this.name} barks`;
  }
}

const d = new Dog("Rex");
console.log(d.makeSound()); // "Rex barks"
```

`protected name` is what makes `this.name` reachable inside `Dog` — if it were `private` in `Animal`, `Dog` couldn't touch it.

## 5. `implements` — enforcing a shape via interface

**TypeScript**
```ts
interface Soundable {
  makeSound(): string;
}

class Cat implements Soundable {
  makeSound(): string {
    return "Meow";
  }
}
```

`implements` doesn't inherit any code — it just tells TS "this class must have every member `Soundable` requires," and errors at compile time if something's missing. Useful when multiple unrelated classes should share a common contract without a shared base class.

---

## Practice Tasks

1. Create a class `Animal` with a `protected name` and a method `makeSound(): string`. Extend it with a `Dog` class that overrides `makeSound()`.
2. Add a `private age` to `Animal` using constructor shorthand, and a `public getAge(): number` method to read it (since `age` itself isn't accessible from outside).
3. Define `interface Soundable { makeSound(): string }` and make a `Cat` class `implements` it, unrelated to the `Animal` hierarchy.

### Checklist
- [ ] Task 1 — class, protected property, inheritance, method override
- [ ] Task 2 — private property + constructor shorthand + public getter
- [ ] Task 3 — implements an interface
