![Header](https://user-images.githubusercontent.com/57585370/118314436-942b4c80-b50d-11eb-9a2a-bb62a5808863.png)
# Умная парковочная система (клиент)

## Содержание
1. [Стек технологий](#techStack)
2. [Требования для использования](#requirements)
3. [Порядок установки](#install)
4. [Структура приложения](#structure)
5. [Продукт](#product)
6. [Разработчику](#dev)

## Стек технологий <a name="techStack" />
- Node JS
- React JS 
- Redux
- Styled components
- TypeScript

## Требования для использования <a name="requirements" />
- Node JS LTS Version

## Порядок установки <a name="install">
1. Нужно установить [Node JS](https://nodejs.org/en/) LTS версию 
2. В корне проекта в терминале прописать команду `npm i`
3. Для полноценной работы клиента нужно запустить [сервер](https://github.com/Mind-team/smart-parking-system-server#install) 
4. В терминале пропишите команду `npm run start`

## Структура приложения <a name="structure" />
- /.github/workflows - github actions
- /public - public
- /src - исходный код
- /src/common - dto 
- /src/components - компоненты
- /src/hooks - кастомные хуки
- /src/img - изображения
- /src/pages - страницы
- /src/styles - стили
- /src/redux - редакс

## Продукт <a name="product" />
Приложение для клиента, в котором пользователь может зарегистрироваться, посмотреть историю паркингов 

## Разработчику <a name="dev">

## Getting Started with React project
This project was bootstrapped with [react-project](https://github.com/Ermolaev-Inc/react-project)

## Project Structure
In **src** folder you can find:
- **components** <br>
  Your independent components should be located here <br>
  If you use css-in-js then create folder and two files: <br>
  **ComponentsName.tsx** and **ComponentNameStyles.tsx** <br>
  If you use sass/scss/less then create folder and two files: <br> 
  **ComponentName.tsx** and **ComponentName.styles.sass** <br>
  
- **pages** <br>
  The pages collected from the components should be here <br>
  Examples: <br>
  Home, About, Contacts ...
- **styles** <br>
  Styles for your pages should be here. It can be styled component or sass/scss/less
  
## Available Scripts
### `npm run start` or `yarn start`
Runs the app in dev mode

### `npm run build` or `yarn build`
Builds the app for production to the build folder

### `npm run lint` or `yarn lint`
Checks compliance with the code style ([Jesse](https://github.com/ErmolaevID/Jesse))

### `npm run lint-fix` or `yarn lint-fix`
Fixes code style errors ([Jesse](https://github.com/ErmolaevID/Jesse))

### `npm run test:coverage` or `yarn test:coverage`
Checks the code coverage by types
