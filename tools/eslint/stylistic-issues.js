module.exports = {
  rules: {

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never', {
      arraysInArrays: true,
      objectsInArrays: false,
      singleValue: false
    }],

    // Enforce consistent spacing inside single-line blocks
    'block-spacing': ['error'],

    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],

    // Enforce camelcase naming convention
    camelcase: ['error', {
      properties: 'always'
    }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['off', 'always', {
      ignoreConsecutiveComments: false,
      ignoreInlineComments: false
    }],

    // Require or disallow trailing commas
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],

    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', {
      after: true,
      before: false
    }],

    // Enforce consistent comma style
    'comma-style': ['error', 'last', {
      exceptions: {}
    }],

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'that'],

    // Require or disallow newline at the end of files
    'eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error'],

    // Require or disallow named function expressions
    'func-names': ['error', 'always'],

    // Enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],

    // Disallow specified identifiers
    'id-blacklist': ['error', 'item', 'data'],

    // Enforce minimum and maximum identifier lengths
    'id-length': ['error', {
      exceptions: [],
      max: 30,
      min: 2,
      properties: 'always'
    }],

    // Require identifiers to match a specified regular expression
    'id-match': ['off'],

    // Enforce consistent indentation
    indent: ['error', 2, {
      ArrayExpression: 1,
      CallExpression: {
        arguments: 'first'
      },
      FunctionDeclaration: {
        body: 1,
        parameters: 'first'
      },
      FunctionExpression: {
        body: 1,
        parameters: 'first'
      },
      MemberExpression: 1,
      ObjectExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: {
        'const': 3,
        let: 2,
        'var': 2
      },
      outerIIFEBody: 1
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', {
      after: true,
      before: true,
      overrides: {}
    }],

    // Enforce position of line comments
    'line-comment-position': ['error', {
      position: 'above'
    }],

    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'windows'],

    // Require empty lines around comments
    'lines-around-comment': ['error', {
      afterBlockComment: false,
      afterLineComment: false,
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      ignorePattern: 'eslint',
      applyDefaultIgnorePatterns: false
    }],

    // Require or disallow newlines around directives
    'lines-around-directive': ['error', {
      after: 'always',
      before: 'always'
    }],

    // Enforce a maximum depth that blocks can be nested
    'max-depth': ['error', {
      max: 4
    }],

    // Enforce a maximum line length
    'max-len': ['error', {
      code: 120
    }],

    // Enforce a maximum number of lines per file
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', {
      max: 3
    }],

    // Enforce a maximum number of parameters in function definitions
    'max-params': ['error', {
      max: 4
    }],

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': ['error', {
      max: 20
    }, {
      ignoreTopLevelFunctions: false
    }],

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', {
      max: 1
    }],

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'never'],

    // Require constructor names to begin with a capital letter
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [],
      properties: true
    }],

    // Require parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],

    // Require or disallow an empty line after variable declarations
    'newline-after-var': ['error', 'always'],

    // Require an empty line before return statements
    'newline-before-return': ['error'],

    // Require a newline after each call in a method chain
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 3
    }],

    // Disallow Array constructors
    'no-array-constructor': ['error'],

    // Disallow bitwise operators
    'no-bitwise': ['error', {
      allow: [],
      int32Hint: false
    }],

    // Disallow continue statements
    'no-continue': ['off'],

    // Disallow inline comments after code
    'no-inline-comments': ['error'],

    // Disallow if statements as the only statement in else blocks
    'no-lonely-if': ['error'],

    // Disallow mixed binary operators
    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
      groups: []
    }],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],

    // Disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }],

    // Disallow negated conditions
    'no-negated-condition': ['error'],

    // Disallow nested ternary expressions
    'no-nested-ternary': ['error'],

    // Disallow Object constructors
    'no-new-object': ['error'],

    // Disallow the unary operators ++ and --
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],

    // Disallow specified syntax
    // TODO
    'no-restricted-syntax': ['error'],

    // Disallow all tabs
    'no-tabs': ['error'],

    // Disallow ternary operators
    'no-ternary': ['off'],

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error', {
      skipBlankLines: false
    }],

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterSuper: false,
      allowAfterThis: false
    }],

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', {
      defaultAssignment: true
    }],

    // Disallow whitespace before properties
    'no-whitespace-before-property': ['error'],

    // Enforce the location of single-line statements
    // // Not used, don't allow this anyway
    'nonblock-statement-body-position': ['error', 'below'],

    // Enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 1
      },
      ObjectPattern: {
        multiline: true
      }
    }],

  // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true
    }],

    // Enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false
    }],

    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', {
      initialized: 'never',
      uninitialized: 'never'
    }],

    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': ['off', 'never'],

    // Enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'after'],

    // Require or disallow padding within blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }],

    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed', {
      keywords: true,
      unnecessary: true,
      numbers: true
    }],

    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }],

    // Require JSDoc comments
    'require-jsdoc': ['off'],

    // Require or disallow semicolons instead of ASI
    semi: ['error', 'always', {
      omitLastInOneLineBlock: false
    }],

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', {
      after: true,
      before: false
    }],

    // Require object keys to be sorted
    'sort-keys': ['off'],

    // Require variables within the same declaration block to be sorted
    'sort-vars': ['error', {
      ignoreCase: true
    }],

    // Enforce consistent spacing before blocks
    'space-before-blocks': ['error', {
      functions: 'always',
      keywords: 'always',
      classes: 'always'
    }],

    // Enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'ignore'
    }],

    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    'space-infix-ops': ['error', {
      int32Hint: false
    }],

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {}
    }],

    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      exceptions: [],
      markers: []
    }],

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error', 'never'],

    // Require parenthesis around regex literals
    'wrap-regex': ['off']

  }
};
