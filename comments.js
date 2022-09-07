const users = 'https://jsonplaceholder.typicode.com/comments'
const container = document.getElementById('container')

fetch(users).then(response => response.json()).then(responseJson => {
    console.log(responseJson)
    for (let user of responseJson) {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td data-label="Id">${user.id}</td>
        <td data-label="Post Id">${user.postId}</td>
        <td data-label="Name">${user.name}</td>
        <td data-label="Email">${user.email}</td>
        <td data-label="Body">${user.body}</td>`
        container.appendChild(tr)
    }
})