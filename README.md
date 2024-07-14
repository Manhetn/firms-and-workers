# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Создайте одностраничное приложение “Список компаний”, используя библиотеку React.js.

Требования:

- react,
- redux(redux-toolkit),
- typescript
  (остальное на ваше усмотрение, НО стоит использовать минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без сторонних библиотек))

Дано: Слева имеется таблица со списком компаний.
Справа: таблица сотрудников выбранной компании. Данные в таблицах должны храниться в сторе.
Данные для таблиц "компании" и "сотрудники" - фейковые, создать самостоятельно.

Шапка таблицы "компании": Чекбокс “Выделить всё”

Тело таблицы имеет столбцы:
| Чекбокс | Название компании | Кол-во сотрудников | Адрес

При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение. При клике по чекбоксу “Выделить всё” - выделяются все строки.

При выделении одной компании - справа, в таблице "сотрудники", видим данные сотрудников этой компании.

Шапка таблицы "сотрудники": Чекбокс “Выделить всё”
Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность

В таблице "сотрудники" при клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение.

Если не выделена ни одна из компаний, то таблица "сотрудники" не видна.

Все поля таблиц редактируемые кроме счётчика сотрудников в таблице "компании".

В обеих таблицах реализовать механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам.

Удаление может быть множественное(если выделены несколько строк).

При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице "компании" обновляется.

Готовый проект нужно разместить в репозитории на Github или Gitlab.

Будет плюсом: предусмотреть вариант когда компаний/сотрудников может быть 10 000+(желательно предложить вариант без переключения по страницам, динамическая загрузка при скролле)

Примечания:
Желательно использовать минимум сторонних библиотек.
Дизайн приложения на ваш вкус. Выполнение всех пунктов не является обязательным, но желательным. Чем точнее будет выполнено тестовое задание, тем у вас больше шансов получить положительный ответ.
