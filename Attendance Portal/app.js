document.getElementById('attendance-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  
  const listItem = document.createElement('li');
  listItem.textContent = `Name: ${name}, Date: ${date}`;
  
  document.getElementById('list').appendChild(listItem);
  
  document.getElementById('attendance-form').reset();
});
