document.getElementById('attendance-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const serial = document.getElementById('serial').value;
  const name = document.getElementById('name').value;
  const bio = document.getElementById('bio').value;
  const image = document.getElementById('image').value;
  const status = document.getElementById('status').value;
  
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
      <td>${serial}</td>
      <td><img src="${image}" alt="${name}'s image"></td>
      <td>${name}</td>
      <td>${bio}</td>
      <td><span class="status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span></td>
  `;
  
  document.getElementById('list').appendChild(tableRow);
  
  document.getElementById('attendance-form').reset();
});
