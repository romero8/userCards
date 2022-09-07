const users = 'https://jsonplaceholder.typicode.com/posts'
const container = document.getElementById('container')

fetch(users).then(response => response.json()).then(responseJson => {
    console.log(responseJson)
    for (let user of responseJson) {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td data-label="Id">${user.id}</td>
        <td data-label="User Id">${user.userId}</td>
        <td data-label="Title">${user.title}</td>
        <td data-label="Body">${user.body}</td>`
        container.appendChild(tr)
    }
})