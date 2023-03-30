console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const tel = document.querySelector('#tel').value;
        const message = document.querySelector('#message').value;

        if (name !== '' && email !== '' && message !== ''&& tel !== '') {
            // ok
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-tel').innerHTML = tel;
            document.querySelector('#user-message').innerHTML = message;
            document.querySelector('#success').classList.add('show-success');
            document.querySelector('#error').classList.remove('show-error');
        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
            document.querySelector('#success').classList.remove('show-success');
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
            document.getElementById("fetch-error").classList.remove('show-error');
            document.getElementById("fetch-error").innerHTML = "";
        })
        .catch((error) => {
            console.log('aja', error);
            document.getElementById("fetch-error").innerHTML = `No se ha podido recuperar el usuario. Por favor inténtelo más tarde. (${error}).`;

    
    
    
    });
}