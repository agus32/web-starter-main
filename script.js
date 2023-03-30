console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name !== '' && email !== '' && message !== '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-message').innerHTML = message;
            document.querySelector('#success').classList.add('show-success');
        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
            document.getElementById("api-img").setAttribute("src", response.results[0].picture.large); 
        })
        .catch((error) => console.log('aja', error));
}