class CoolGuy {
  action = "";

  CoolGuy(action) {
    this.action = action;
  }

  showOff() {
    console.log("action: ", this.action);
  }
}
let Tom = new CoolGuy("Jump");

Tom.showOff();
console.log("tom: ", Tom);

class C extends String {
  // constructor(value) {
  //   super(value);
  //   this.value = value;
  // }
  valueOf() {
    console.log("chidlren valueOf");
    return String.valueOf.call(this);
  }
}

let c = new C("hello");
console.log(c);

class Bob extends CoolGuy {
  constructor(action) {
    super(action);
  }
}

let b = new Bob("jump");
b.CoolGuy = 2;

console.log("b", b);
