# Contribuindo

Caso queira apenas inserir ou editar informações de um evento:

## [🙉 Eu quero inserir um novo desafio](#adicionando-ou-editando-desafios)

Caso queira contribuir com código, estamos utilizando VueJS + Stylus para o desenvolvimento do app:

## [🙈 Eu quero contribuir com código](#contribuindo-com-código)

# Adicionando ou editando desafios

Pode ser que um novo evento esteja ocorrendo e esta aplicação ainda não esteja exibindo. Nem tudo é tão automático, é necessário incluir algumas informações no arquivo de configuração [`challenges.json`](https://github.com/reebr/challenge-stats/blob/development/src/challenges.json). Todas as informações necessárias podem ser obtidas no READMEs de cada desafio existente no [repositório do evento](https://github.com/codigofalado/desafio333).

```json
{
  // Edição do evento
  "edition": 1,
  // Nome da tecnologia alvo.
  "title": "XPTO",
  // Pequena descrição sobre qual é o objetivo do evento.
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // Label utilizado no GitHub para agrupar as Pull Requests da edição do evento em questão.
  "label": "desafio-xpto",
  // Data limite para entrega as incrições
  "deadline": "2019-08-25T00:00:00",
  // Username (no GitHub) dos vencedores na ordem em que foi dada as premiações.
  // Pode ser um array vazio, caso os vencedores do evento não tenham sido divulgados.
  "winners": [
    "codigofalado",
    "outrousuario",
    "outrousuariomesmo"
  ]
}
```


# Contribuindo com código

Clone este repositório e instale as dependências.

```
git clone https://github.com/reebr/challenge-stats.git

cd ./challenge-stats
yarn
```

<sup>Exemplo no Windows utilizando [Yarn][2].</sup>


## Token

Para consumir a API do GitHub, é necessário a criação de um token provendo os escopos (ou permissões) disponíveis. Para que esta aplicação funcione corretamente, o escopo `repo` deve ser marcado quando você [criar um novo token][1].

## Executando em modo de desenvolvimento

Uma vez tendo as dependências instaladas e o token criado no GitHub. No terminal/console, defina a variável de ambiente `VUE_APP_GH_TOKEN` com o valor do token disponibilizado pelo GitHub. Após isto, basta executar o comando `serve` para iniciar a aplicação:

```

$env:VUE_APP_GH_TOKEN="<token>"
yarn serve

DONE  Compiled successfully in 286ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://x.x.x.x:8080/
```

<sup>Exemplo no Windows utilizando Powershell.</sup>

## Build para produção

Para construir a aplicação pronta para produção, utilize o comando `yarn serve`.

[1]:https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line
[2]:https://yarnpkg.com/lang/en/