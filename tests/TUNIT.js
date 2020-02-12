// Simple JS Unit Testing
// Based on https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74

let TUNIT = {
  not: false,
  passed: 0,
  failed: 0,
  msg: '',
  level: 0,
  sum: () => this.passed + this.failed,
  stats: () => print(`${this.passed} passing, ${this.failed} failing`)
};

const describe = (desc, func) => {
  TUNIT.not = false;
  IJ.log(desc);
  func();
}

const it = (msg, func) => {
  TUNIT.msg = msg;
  TUNIT.level = msg.length - msg.trim().length;
  func();
}

const repeat = (char,n) => {
  str = '';
  for (let i = 0; i < n; i++) {
    str += char;
  }
  return str;
}

const assert = (condition) => {
    if ((!TUNIT.not && condition) || (TUNIT.not && condition) ) {
      print(repeat(' ',TUNIT.level) + '  OK: ' + TUNIT.msg.trim() );
      TUNIT.passed++;
      return true;
    } else {
      print(repeat(' ',TUNIT.level) + '  KO: ' + TUNIT.msg.trim());
      TUNIT.failed++;
      return false;
    }
}

const matchers = (exp) => ({
  toBe: (assertion) => assert(exp === assertion),
  toEqual: (assertion) => {
    let flag = false;
    if (Array.isArray(assertion) ) {
      flag = (exp.length === assertion.length) && assertion.every( (v,i) => v === exp[i]);
    }
    else {
      flag = exp == assertion;
    }
    assert(flag);
  },
  get not() {
    TUNIT.not = !TUNIT.not;
    return this;
  }
})

const expect = (exp) => matchers(exp);
