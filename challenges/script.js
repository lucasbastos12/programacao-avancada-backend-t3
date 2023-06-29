const List = document.getElementById('List');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email}`;
      List.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log('Erro:', error.message);
  });
