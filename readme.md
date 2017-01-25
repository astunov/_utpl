# Common

  * [.editorconfig](http://editorconfig.org/#example-file)
  * [Webpack^2.0.0](https://webpack.js.org)

# Javascript

  * Es6, Es7
  * [JSDoc](http://usejsdoc.org/) (??)
  * [.eslintrc.json](http://eslint.org/), .eslintignore
      За основу взят конфиг от [airbnb](https://github.com/johnie/eslint-config-airbnb-flow). 
  * [Flow](https://flowtype.org/)
  * [Ava](https://github.com/avajs/ava)[tutorials](https://github.com/avajs/awesome-ava)
  * [istanbul](https://istanbul.js.org)

# SCSS
  * PostCSS
    * [autoprefixer](https://github.com/postcss/autoprefixer)
    * [cssnano](http://cssnano.co/) — css-loader contains by default
  * [.stylelint.json](https://github.com/stylelint/stylelint)[guide](https://medium.com/@bjankord/how-to-lint-scss-with-stylelint-dc87809a9878#.dgckflxel)

# Tasks

  * `npm run dev` webpack dev
  * `npm run prod` webpack prod
  * `npm run eslint`
  * `npm run flow`
  * `npm run test` ava
  * `npm run stylelint`

# Хотелки
  * sync HYBRIS ecosystem ?? Webpack dev server
  * --watch (Gulp\webpack\nodemon)
  * SCSS
    * SourceMaps
  * PostCSS
    * [Regression testing](https://pitercss.ru/9/pres/css-testing.pdf)
    * [doiuse](https://github.com/anandthakker/doiuse)
    * [PostCSS Fixes](https://github.com/MattDiMu/postcss-fixes)
    * Fallback plugins ??? http://postcss.parts/tag/fallbacks
    * Fonts plugin ??? http://postcss.parts/tag/fonts
    * SVG plugins ??? http://postcss.parts/tag/svg
  * IMG
    * Build
    * Optimize
  * SVG
    * [sprites](https://medium.com/@deeepakampolu/til-using-svg-icon-sprites-with-webpack-2fd4db7ead76#.sbxctf6eh)
  * Позиция с линтингом. Сейчас линтинг носит рекомендательный характер. На какой стадии разработки становится обязательный? Прекомит хук? Сборка проекта?

# Поддержка
  [Browserslist](https://github.com/ai/browserslist) добавлен в package.json
  [Config test](http://browserl.ist/)
  На терминалах стоит Мозилла 48
  Для IE8 - IE10 graceful degradation. Должна быть возможность совершить покупку.
  Opera mini??
