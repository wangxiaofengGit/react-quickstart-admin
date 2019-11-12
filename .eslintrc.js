module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-lonely-if': 0,
    'import/extensions': 0,
    'object-shorthand': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
    'prefer-arrow-callback': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'no-unused-expressions': 0,
    // case 可不 break
    'no-case-declarations': 0,
    // 不修改的变量不强制使用 const
    'prefer-const': 0,
    // 禁用 var，用 let 和 const 代替
    'no-var': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 不能对var声明的变量使用delete操作符
    'no-delete-var': 2,
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 2,
    // 在创建对象字面量时不允许键重复 {a:1, a:1}
    'no-dupe-keys': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // switch 中的 case 标签不能重复
    'no-duplicate-case': 2,
    // 如果if语句里面有 return ,后面不能跟 else 语句
    'no-else-return': 2,
    // 禁止对null使用 == 或 != 运算符
    'no-eq-null': 2,
    // 禁止不必要的 bool 转换
    'no-extra-boolean-cast': 2,
    // 禁止非必要的括号
    'no-extra-parens': 2,
    // 禁止多余的冒号
    'no-extra-semi': 2,
    // 禁止省略浮点数中的0 .5 3.
    'no-floating-decimal': 2,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止隐式转换
    'no-implicit-coercion': 1,
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    // 允许使用 ++ --
    'no-plusplus': 0,
    // 不能有不规则的空格
    'no-irregular-whitespace': 2,
    // 不能用多余的空格
    'no-multi-spaces': 2,
    // 字符串不能用\换行
    'no-multi-str': 2,
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    // 禁止给参数重新赋值
    'no-param-reassign': 0,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 不能比较自身
    'no-self-compare': 2,
    // 函数调用时 函数名与 () 之间不能有空格
    'no-spaced-func': 2,
    // 禁止稀疏数组, [1,,2]
    'no-sparse-arrays': 2,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 0,
    // 不能有未定义的变量
    'no-undef': 2,
    // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 0,
    // 不能有无法执行的代码
    'no-unreachable': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    // 未定义前不能使用
    'no-use-before-define': 2,
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ], //不能有警告备注
    'no-with': 2, //禁用with
    // 是否允许非空数组里面有多余的空格
    'array-bracket-spacing': [2, 'never'],
    // 允许 array map 等可不 return
    'array-callback-return': 0,
    // 对象字面量项尾不能有逗号
    'comma-dangle': [2, 'never'],
    // return 后面是否允许省略 return false
    'consistent-return': 2,
    // this 别名
    'consistent-this': [2, 'self'],
    // 必须使用 if(){} 中的{}
    curly: [2, 'all'],
    // 文件以单一的换行符结束
    'eol-last': 2,
    // 必须使用全等
    eqeqeq: 2,
    // 缩进风格
    indent: 2,
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 函数最多只能有 4 个参数
    'max-params': [0, 4],
    // 函数内最多有几个声明
    'max-statements': [0, 10],
    // 语句强制分号结尾
    semi: [2, 'always'],
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': [0, 'always'],
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    'no-restricted-globals': 0,
    "linebreak-style": [0 ,"error", "windows"],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
