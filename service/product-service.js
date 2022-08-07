const listaProdutos = () =>  {
    //return fetch(`http://localhost:3000/produtos`)
    //return fetch(`https://my-json-server.typicode.com/KarenCamp/Geek-Shop/produtos`)
    return fetch(`https://json-server-test-fake-api.herokuapp.com/produtos`)
    .then(resposta => {
        return resposta.json()
    })
}

const criaProduto = (id, name, price, description) => { 
    return fetch(`https://json-server-test-fake-api.herokuapp.com/produtos`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nome: name,
            preco: price,
            descricao: description
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

const removeProduto = (id) => { 
    return fetch(`https://json-server-test-fake-api.herokuapp.com/produtos`, {
        method: 'DELETE'
    })
}

const detalhaProduto = (id) => {
    return fetch(`https://json-server-test-fake-api.herokuapp.com/produtos/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const atualizaProduto = (id, name, price, description) => {
    return fetch(`https://json-server-test-fake-api.herokuapp.com/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nome: name,
            preco: price,
            descricao: description
        })
    })
        .then(resposta => {
            return resposta.json()
        })
}

export const productService = { 
    listaProdutos,
    criaProduto, 
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
