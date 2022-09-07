const users = 'https://jsonplaceholder.typicode.com/users'
const container = document.getElementById('container')

fetch(users).then(response => response.json()).then(responseJson => {

    for (let user of responseJson) {
        let card = document.createElement('div')
        card.innerHTML = ` <div class="card">
        <h4>Name: ${user.name}</h4>
        <br>
        <p>Id: ${user.id}</p>
        <p>Phone: ${user.phone}</p>
        <p>User Name: ${user.username}</p>
        <p>Website: ${user.website}</p>
    </div>`
        container.appendChild(card)
    }
})