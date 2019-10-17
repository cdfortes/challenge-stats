<p align="center">
  <img src="./src/assets/zen-monkey.png" height="150" align="center">
</p>

# Challenge Stats [![latest-tag][8]][11] [![open-issues][9]][10]

Este projeto foi um experimento desenvolvido em live na Twitch ([**@reeebr**][1]) para aprender [VueJS][2]. Para isso, foi criado um app com o objetivo de listar os participantes do [#desafio333][4] (desafio mensal criado pelo canal [**@codigofalado**][7] com a proposta de convidar a comunidade a aprender novas tecnologias).

Você pode entender melhor como funciona o desafio [neste link][5], mas resumidamente: dado um desafio, os participantes devem resolver e "se inscrever" submetendo uma pull request no [repositório do evento][4]. A resolução (a.k.a pull request) que tiver mais reações únicas, de usuários diferentes, leva a premiação.

Como todo o processo ocorre no GitHub, a ideia foi consumir a API do GitHub para consultar e "fazer alguma coisa" com os dados obtidos do repositório do desafio — *foi utilizada a [API v4 (GraphQL)][3] para realizar toda a [query][6]*.


<p align="center">
  <kbd><img src="https://i.imgur.com/f9S3Fw5.png"></kbd>
</p>


## Contribuindo

Contribuições são bem-vindas, [veja como contribuir](contributing.md).

[1]:https://www.twitch.tv/reeebr
[2]:https://vuejs.org/
[3]:https://developer.github.com/v4/
[4]:https://github.com/codigofalado/desafio333
[5]:https://github.com/codigofalado/desafio333#como-participar
[6]:https://github.com/reebr/challenge-stats/blob/development/src/lib/github.js
[7]:https://github.com/codigofalado
[8]:https://badgen.net/github/release/reebr/challenge-stats
[9]:https://badgen.net/github/open-issues/reebr/challenge-stats
[10]:https://github.com/reebr/challenge-stats/issues
[11]:https://github.com/reebr/challenge-stats/releases
