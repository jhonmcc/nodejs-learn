const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end({server: 'Server is on-line'})
    console.log('Server is online')
}).listen(3000)
// -> Para rodar o arquivo no seu terminal insira o comando -> node .\1-createServer.js
// -> logo apos vá para seu navegador e abra a seguinte url -> http://localhost:3000/

// Por padrao o http já vem no node, por outro lado é um pouquinho trabalhoso criar um servidor assim mais pra 
// frente iremos ver o express que auxilia a gente na hora de criar um servidor e api delegando as tarefas bonitinho