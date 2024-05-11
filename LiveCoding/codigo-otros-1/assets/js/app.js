const baseEndpoint = 'https://api.github.com'; 
const usersEndpoint = `${baseEndpoint}/users`; 
const $n = document.querySelector('.name'); 
const $b = document.querySelector('#blog'); 
const $l = document.querySelector('.location'); 

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json (); 
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }
  catch (error) {
    handleError(error); // Llamar a handleError directamente
  }
}

function handleError(err){
  console.log('OH NO!', err); // Mostrar el error en la consola
  $n.textContent = `Algo salió mal: ${err}`; // Informar al usuario sobre el error
}

displayUser('stolinski').catch(handleError);
