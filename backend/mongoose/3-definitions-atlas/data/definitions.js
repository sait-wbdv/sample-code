const definitions = [
  {
    term:'Global',
    description: 'All code that is not inside a function. ',
    slug: 'global'
  },
  {
    term:'Global Execution Context',
    description: 'The environment that is available everywhere in your app.',
    slug: 'global-execution-context'
  },
  {
    term:'Lexical Environment',
    description: 'Where something sits physically in the code you write. In Javascript, *where* you write your code is important',
    slug: 'lexical-environment'
  },
  {
    term:'Syntax Parser',
    description: 'A program that reads your code and determines what it does and if its grammar is valid',
    slug: 'syntax-parser'
  },
  {
    term:'Execution Context',
    description: 'A wrapper to help manage the code that is running. The lexical environment that is currently running is managed via execution contexts.',
    slug: 'execution-context'
  },
  {
    term:'Variable Environment',
    description: 'Where a named value lives.',
    slug: 'variable-environment'
  },
  {
    term:'Name/Value Pair',
    description: 'A name which maps to a unique value.',
    slug: 'name-value-pair'
  },
  {
    term:'Primitive Type',
    description: 'A Type of data that represents a single value.',
    slug: 'primitive-type'
  },
  {
    term:'Operator',
    description: 'A special function that is syntactically written differently. Generally, operators take two arguments and return one result.',
    slug: 'operator'
  },
  {
    term:'Operator Precedence',
    description: 'Which operator function gets call first (i.e. BEDMAS).',
    slug: 'operator-precedence'
  },
  {
    term:'Operator Associativity',
    description: 'What order operator functions get called in. left-to-right or right-to-left.',
    slug: 'operator-associativity'
  },
  {
    term:'Expression',
    description: 'A piece of code that returns a value.',
    slug: 'expression'
  },
  {
    term:'Coersion',
    description: 'Converting a value from one type to another.',
    slug: 'coersion'
  },
  {
    term:'Object',
    description: 'A collection of name/value pairs (in terms of Javascript).',
    slug: 'object'
  },
  {
    term:'First-class Function',
    description: 'Everything you can do with other types, you can do with functions.',
    slug: 'first-class-function'
  },
  {
    term: 'Callback',
    description: 'A function passed to another function , which we assume will be invoked at some point.',
    slug: 'callback'
  },
  {
    term: 'Error-first Callback',
    description: 'Callbacks that take an error object as their first parameter. `null` if no error, otherwise this will be an object containing our error.',
    slug: 'error-first-callback'
  }
];

module.exports = definitions;