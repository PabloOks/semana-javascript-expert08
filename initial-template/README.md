# JSExpertHub Reimaging Video Upload - Semana JS Expert 8.0

Seja bem vindo(a) à oitava Semana Javascript Expert. Este é o código inicial para iniciar nossa jornada.

Marque esse projeto com uma estrela 🌟

## Preview
<img width=100% src="./demo.gif">

## Pre-reqs
- Este projeto foi criado usando Node.js v18.17.0
- O ideal é que você use o projeto em ambiente Unix (Linux). Se você estiver no Windows, é recomendado que use o [Windows Subsystem Linux](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) pois nas aulas são mostrados comandos Linux que possam não existir no Windows.

## Importante
- Todo dia às 18hrs estou subindo o código das aulas do dia corrente em [classes](./classes). Se você for iniciar o projeto, remova a pasta [classes](./classes) para iniciar do zero!

## Running
- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features

- Video Uploader
  - [x] - Deve entender videos em formato MP4 mesmo se não estiverem fragmentados
  - [x] - Deve processar itens em threads isoladas com Web Workers
  - [x] - Deve converter fragmentos de videos em formato `144p`
  - [x] - Deve renderizar frames em tempo real em elemento canvas
  - [x] - Deve gerar arquivos WebM a partir de fragmentos

### Desafios
- [] - TBD


### Links mostrados nos aulas:
- Reuni todos os links em [referências](./referencias.md)
### Considerações
- Tire suas dúvidas sobre os desafios em nossa comunidade, o objetivo é você aprender de forma divertida. Surgiu dúvidas? Pergunte por lá!

- Ao completar qualquer um dos desafios, envie no canal **#desafios** da comunidade no **Discord**
### FAQ
- browser-sync está lançando erros no Windows e nunca inicializa:
  - Solução: Trocar o browser-sync pelo http-server.
    1. instale o **http-server**  com `npm i -D http-server`
    2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
    3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o http://localhost:8080/
  A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo

