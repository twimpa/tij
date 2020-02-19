/* Simple JS Unit Testing
 * Based on the article and code written by Lachlan Miller
 * From https://codeburst.io/a-simple-javascript-test-framework-from-scratch-89d6e7d22e74
 *
 * Authors:
 * Lachlan Miller
 * Jean-Christophe Taveau
 */
 
 
let TUNIT = {
  not: false,
  passed: 0,
  failed: 0,
  msg: '',
  level: 0,
  count: 1,
  start: 0,
  previous: 'none',
  sum: () => this.passed + this.failed,
  stats: () => print(`\n${this.passed} passing, ${this.failed} failing`)
};

const describe = (desc, func) => {
  TUNIT.not = false;
  if (TUNIT.previous === 'describe') {
    TUNIT.level++;
  }
  TUNIT.previous = 'describe';
  let level = TUNIT.level;
  print(`${(level >= 1) ? '  #' :''}${desc}`);
  func();
  if (level === 0) {
    TUNIT.stats();
  }
}

const it = (msg, func) => {
  // Store info for display
  TUNIT.previous = 'it';
  TUNIT.msg = msg;
  TUNIT.start = new Date().getTime();
  try {
    func();
  }
  catch (e) {
    fail(e);
  }
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
  if ((!not && condition) || (not && condition) ) {
    print(` ${repeat(' ',TUNIT.level)}  ☑ ok ${TUNIT.count++}: ${msg} (${elapsed}ms)`);
    TUNIT.passed++;
    return true;
  }
  else {
    throw msg;
  }
}

const fail = (e) => {
  // TODO must catch the exception
  print(`${repeat(' ',TUNIT.level)}   ☐ not ok ${TUNIT.count++}: ${e}`);
  TUNIT.failed++;
  return false;
}

const assert = (condition) => {
  let elapsed = new Date().getTime() - TUNIT.start;
  try {
    pass(TUNIT.not,condition,TUNIT.msg);
  }
  catch (e) {
    fail(e);
  }
}

const matchers = (exp) => ({
  toBe: (assertion) => assert(exp === assertion),
  toBeNaN: () => assert(isNaN(exp)),
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
