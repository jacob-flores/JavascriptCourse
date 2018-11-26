const testingTeam = {
  lead: "Testing Leader",
  tester: "Tester 01",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Engineering Leader",
  manager: "Engineering Manager",
  engineer: "Engineer 01",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);
