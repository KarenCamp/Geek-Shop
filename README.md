Iniciando git nesta réplica do template como um todo do novo projeto AluraChallenge do programa ONE, uma proposta de e-commerce desta vez. Estou praticando Flexbox neste desafio e metodologia BEM, e não trabalhando com apenas um arquivo "style.css" como das outras vezes. Ainda haverá toda a parte JS pela frente, e já sinto que o "this" me ajudará bastante novamente, hehe...Ah, também tem todo o trabalho com as adaptações responsivas, não mexi em nada ainda nesse sentido, nenhuma media query implementada até então, pra não dizer que não mexi em nada apenas apliquei "flex-wrap: wrap" nos cards.

Updating README - 19/04/22:

- 280px -> resolução mínima de suporte das páginas, baseada nas palavras do meu querido professor Gustavo Guanabara: "Boa medida, baseada em largura máxima da tela em pé de celulares razoavelmente antigos."

- "calc" em css, amei te conhecer melhor XD

- Ainda não me familiarizei com unidades de medidas como "em" ou "rem", por enquanto sigo com meus "px", "%" e "vw/vh" ("vw" pela primeira vez aqui no Geek Shop)

- Será implementado um botão no lugar da área do mapa de imagem implementado no html na imagem do banner, este recurso é interessante, porém não oferece o suporte desejado no que diz respeito à responsividade.

- O desenvolvimento do projeto não está sofisticado como eu gostaria, no momento estou me dedicando aos cuidados pós-operatórios de um familiar querido hospedado em minha casa, futuramente poderei estar dispondo de maior delicadeza no trato desta potencial aplicação.

Updating README - 16/05/22:

CRUD bem sucedido, arquivos .js todos aí, com type="module" agora e importações (nunca pratiquei muito disso antes, deu pra viver bastante coisa nova em HTML, CSS e Javascript a partir desta aventura, a partir de mais este AluraChallenge do programa Oracle Next Education. 

Há avisos e informações sobre como as coisas foram organizadas e tratadas na aplicação, ao longo da navegação nas páginas. Encontrei uma forma mais simples e também eficaz de se trabalhar com as imagens dos produtos, sem ter que neste momento recorrer a conhecimentos avançados de como trabalhar com uploads e codificação para imagens em arquivos .json, dentre outras formas menos práticas também, na minha opinião. Implementações mais simples, sem uso de Bootstrap e JQuery, sem uso de modais ao invés dos desestilizados alerts, mas a missão principal foi cumprida, e já dá pra fazer um push satisfatório desta considerável realização em HTML, CSS e Javascript pra mim, ainda há muito o que se aprender, mas pelo menos consegui este feito. 

Obs: Eu estava tão concentrada no CRUD e seus relacionados que agora que me deparei com a falta de funcionalidade da barra de pesquisa, mas ressaltando, a proposta do AluraChallenge foi atendida em seu núcleo, ainda que eu não me esqueça desta funcionalidade e ainda retorne ao js visando suas linhas de código de implementação.



Informações técnicas:

Login de administrador do Geek Shop:

e-mail: edition-mode-on@teste.com
senha: admin789

Foi utilizada a extensão "Live Server" do Visual Studio Code e a dependência "Json Server" para rodar a aplicação e sua lista de dados. Depois da instalação da extensão Live Server de maneira simples através do VSCode, com a pasta do projeto aberta no programa basta digitar no terminal integrado: "npm i" para instalar as dependências do projeto e depois do processo concluído digitar no terminal: "npx json-server --watch db.json" para que os dados sejam carregados para o corpo das páginas. Com a extensão habilitada, clique em "Go Live" para acessar as páginas e os produtos.

Updating README - 18/05/22:

Filtro da barra de pesquisa implementado

Updating README - 22/05/22:

Filtro da barra de pesquisa agora refinando os resultados

Updating - 07/08/2022:

Agora é possível fazer o Crud na nuvem, através da integração com uma aplicação no Heroku. Thanks, @YoussefZidan , for your post page about the fake server and equivalent repository.
