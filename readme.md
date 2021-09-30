#ComicVine List

## Features
- Listar todos personagens
- Listar Personagens por nome
- Adicionar personagens aos favoritos
- Perfil do personagem

## Tech
- ReactJS
- Typescript
- React Hooks
- Redux
- Redux saga
- Redux persist
- NextJS
- Styled Components
- Axios

## Run

- Faça uma conta em: [comicvine](https://comicvine.gamespot.com/api/)
- Ao se cadastrar e obter o token, faça uma copia do arquivo env e renomeio para .env local: "/server-render"
- Abra o arquivo e cole sua chave em: REACT_APP_API_KEY=SUA_CHAVE_AQUI

##On linux - client-render
```sh
 cd client-render
```sh
 npm install
```
```sh
 npm start
```

##On linux - server-render
```sh
cd server-render
```
```sh
npm install
```
```sh
npm dev
```

##On windows - client-render
```sh
 cd client-render
```
```sh
 npm install
```
```sh
 npm install cross-env --dev
```
Entre no arquivo "package.json" e altere o comando "start": "PORT=4000 && react-scripts start" para "start": "cross-env PORT=4000 react-scripts start"
```sh
 npm start
```

##On windows - server-render
```sh
 cd server-render
```
```sh
 npm install
```
```sh
 npm dev
```

- É muito importante que o client-side esteja na porta 4000. Caso o comando start do client-side não esteja funcionando corretamente, você deverá ir em "package.json" buscar por "scripts" e alterar o comando "dev" para que funcione corretamente em seu SO.

## Info

O projeto ainda ão está alinhado com os requisitos obrigatorios, alguns erros/bugs podem acontecer.
