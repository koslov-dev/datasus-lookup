# DATASUS LOOKUP 🔎

## Descrição

O `datasus-lookup` é um módulo Node.js que permite consultar informações do DATASUS, diretamente do site do governo brasileiro. Com esse módulo, é possível realizar consultas de CPF, CNS e nome.

## Instalação

Para instalar o `datasus-lookup`, utilize o npm:

```bash
$ npm install datasus-lookup
```

## Como utilizar

Importe as funções necessárias para realizar as consultas:

```js
const { consultarNome, consultarCns, consultarCpf } = require('datasus-lookup');
```

## Exemplo de Consulta de CPF:

```js
consultarCpf('12345678901')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
```

## Exemplo de Consulta de CNS:

```js
consultarCns('123456789012345')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
```

## Exemplo de Consulta de Nome:

```js
consultarNome('Fulano da Silva')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
```

### Observações:

+ As consultas de CPF e CNS retornam informações caso existam no banco de dados do DATASUS.
+ A consulta de nome pode retornar informações relacionadas aos nomes pesquisados.

