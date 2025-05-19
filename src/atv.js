import http from 'node:http'

const users = []
const produtos =[] 

const server = http.createServer((req, res) => {
    const {method, url}= req

    if(method === 'GET' && url === '/users'){
        return res.setHeader('content-type', 'aplication/json').end(JSON.stringify(produtos))
    }

    if(method === 'POST' && url === '/produtos'){
        users.push({
            id:1,
            name: 'Garrafa',
            estoque: 30
        })

        return res.end(produtos)

    }
    return res.end('Página Inic')
})

server.listen(3001)
