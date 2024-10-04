


document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const studentId = document.getElementById('student-id').value;
  const name = document.getElementById('name').value;
  const rollNo = document.getElementById('roll-no').value;
  const classInfo = document.getElementById('class').value;
  
  const bioContainer = document.getElementById('bio-container');
  bioContainer.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Student ID:</strong> ${studentId}</p>
      <p><strong>Roll No:</strong> ${rollNo}</p>
      <p><strong>Class:</strong> ${classInfo}</p>
  `;
  
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('attendance-container').style.display = 'block';
});

document.getElementById('logout-button').addEventListener('click', function() {
  document.getElementById('attendance-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('login-form').reset();
  document.getElementById('bio-container').innerHTML = '';
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  
  const name = document.getElementById('name').value;
  const status = document.getElementById('status').value;
  
  const listItem = document.createElement('li');
  listItem.className = 'attendance-item';
  
  const details = document.createElement('div');
  details.className = 'details';
  details.textContent = name;
  
  const statusBadge = document.createElement('div');
  statusBadge.className = `status ${status}`;
  statusBadge.textContent = status;})
