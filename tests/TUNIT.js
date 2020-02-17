// Simple JS Unit Testing
// From https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74

let TUNIT = {
  not: false,
  passed: 0,
  failed: 0,
  msg: '',
  level: 0,
  count: 1,
  start: 0,
  sum: () => this.passed + this.failed,
  stats: () => print(`\n${this.passed} passing, ${this.failed} failing`)
};

const describe = (desc, func) => {
  TUNIT.not = false;
  let level = TUNIT.level++;
  print(`${(level >= 1) ? '  #' :''}${desc}`);
  func();
  if (level === 0) {
    TUNIT.stats();
  }
}

const it = (msg, func) => {
  // Store info for display
  TUNIT.msg = msg;
  TUNIT.start = new Date().getTime();
  func();
}

const repeat = (char,n) => {
  str = '';
  for (let i = 0; i < n; i++) {
    str += char;
  }
  return str;
}

const pass = (not,condition,msg) => {
  let elapsed = new Date().getTime() - TUNIT.start;
  if ((!TUNIT.not && condition) || (TUNIT.not && condition) ) {
    print(`${repeat(' ',TUNIT.level)}${TUNIT.count++} ok: ${TUNIT.msg} (${elapsed}ms)`);
    TUNIT.passed++;
    return true;
  }
  else {
    throw 'TestFailed';
  }
}

const fail = () => {
  // TODO must catch the exception
  print(repeat(' ',TUNIT.level) + (TUNIT.count++) +' not ok: ' + TUNIT.msg.trim());
  TUNIT.failed++;
  return false;
}

const assert = (condition) => {
  let elapsed = new Date().getTime() - TUNIT.start;
  if ((!TUNIT.not && condition) || (TUNIT.not && condition) ) {
    print(`${repeat(' ',TUNIT.level)}${TUNIT.count++} ok: ${TUNIT.msg} (${elapsed}ms)`);
    TUNIT.passed++;
    return true;
  } else {
    print(repeat(' ',TUNIT.level) + (TUNIT.count++) +' not ok: ' + TUNIT.msg.trim());
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
