# js-ui-wdio
js-ui-wdio

1.Разворачивание проекта. Nodejs, NPM, package.json. Подготовка wdio.config.js файла. Первый тест

npm install @wdio/cli

npx wdio config
Выбираем нужные нам параметры, автоматически должен создастся файл wdio.conf.js, а так же test-specs-example.e2e.js
@wdio/sync - уже не используется, выполняется в async

Зависимости:
    "@wdio/local-runner": "^7.17.4",
    "@wdio/mocha-framework": "^7.17.3",
    "@wdio/spec-reporter": "^7.17.3",
    "chromedriver": "^99.0.0",
    "wdio-chromedriver-service": "^7.2.8",

---------------------------------------------------------------------------------------------------------------
2.Подключение TypeScript и ts-node к webdriverio проекту. Принципы поиска элементов на странице. CSS, xPath. Chaining Elements

Создаем файл tsconfig.json, в нем прописываем настройки для ts.

В package.json, в Dependencies, добавляем:
    "typescript": "4.6.2",
    "ts-node": "10.7.0",

    "@types/mocha": "^9.1.0",
    "@types/node": "^17.0.21",
    "@types/chai": "^4.3.0"

Т.к. у нас async  в "compilerOptions"- "types"- добавляем "webdriverio/async"

В wdio.conf.js, добавляем require("ts-node").register({files: true}); - инструкция для ts-node, откуда запускать и транспилировать наши тесты(пример свойств:
  files: true,
  transpileOnly: true,
  project: './test/tsconfig.json')

 В wdio.conf.js, изменим, на .ts какой файл хотим запускать в specs: [
        //'./test/specs/**/*.js'
        './test/specs/**/*.ts'
    ],

Все теперь в файлах .js и .ts доступны свойства и методы через "."    

SELECTORS:

https://webdriver.io/docs/selectors/

Получить элемент можно по:
$(''); - он в любом случае вернет объект даже если его не найдет.
$$(''); - он в любом случае вернет массив объектов, даже если не найдет, тогда массив пустой.

https://www.w3schools.com/cssref/css_selectors.asp - In CSS, selectors are patterns used to select the element(s) you want to style.
https://www.w3schools.com/cssref/trysel.asp - Use our CSS Selector Tester to demonstrate the different selectors.

CSS selector - нужно использовать если ищем от объекта вНиз

xPath - используем если хотим искать от объекта вВерх и вБок, а так же если поиск по ТАБЛИЦАМ
Лучший мануал по xPath - https://docs.google.com/document/d/1PdfKMDfoqFIlF4tN1jKrOf1iZ1rqESy2xVMIj3uuV3g/pub



---------------------------------------------------------------------------------------------------------------
3.Доступные действия на странице. Управление браузером, работа с элементами страницы. Написание теста на форму регистрации

https://webdriver.io/docs/api/browser/$
https://webdriver.io/docs/api/element/$


---------------------------------------------------------------------------------------------------------------
4.MochaJS. Пре\Пост условия. Describe\it функции

https://habr.com/ru/company/ruvds/blog/423703/

~: если вы задаёте версию в виде ~0.13.0 это означает, что вас интересуют лишь патч-релизы пакета. То есть, пакет 0.13.1 вам подойдёт, а 0.14.0 — нет.
^: если номер версии задан в виде ^0.13.0, это означает, что вам подходят новые патч-версии и минорные версии пакета. То есть, вас устроят версии пакета 0.13.1, 0.14.0, и так далее.
*: воспользовавшись этим символом, вы сообщаете системе, что вас устроят любые свежие версии пакета, в том числе — его новые мажорные релизы.
>: подходят любые версии пакета, которые больше заданной.
>=: подходят любые версии пакета, которые равны или больше заданной.
<=: вас устроят пакеты, версии которых равны заданной или меньше её.
<: вас интересуют пакеты, версии которых меньше заданной.
=: вам нужна только заданная версия пакета.
-: используется для указания диапазона подходящих версий, например — 2.1.0 - 2.6.2.
||: позволяет комбинировать наборы условий, касающихся пакетов. Например это может выглядеть как < 2.1 || > 2.6.

https://nodejs.org/api/assert.html

Chai:

https://www.chaijs.com/
    
npm install chai
"chai": "^4.3.6"

https://www.chaijs.com/api/bdd/

Expect
Shoull
Assert



