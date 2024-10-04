// script.js

document.addEventListener('DOMContentLoaded', function() {
  checkUserLogin();
});

function login() {
  const email = document.getElementById('email').value;
  if (email) {
      localStorage.setItem('userEmail', email);
      showHomePage();
  } else {
      alert('Please enter your email');
  }
}

function checkUserLogin() {
  const email = localStorage.getItem('userEmail');
  if (email) {
      showHomePage();
  } else {
      showLoginPage();
  }
}

function showLoginPage() {
  document.getElementById('login-page').style.display = 'block';
  document.getElementById('home-page').style.display = 'none';
}

function showHomePage() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('home-page').style.display = 'block';
  loadNotes();
}

function logout() {
  localStorage.removeItem('userEmail');
  showLoginPage();
}

function submitNote() {
  const noteContent = document.getElementById('note-content').value;
  if (noteContent) {
      let notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(noteContent);
      localStorage.setItem('notes', JSON.stringify(notes));
      document.getElementById('note-content').value = '';
      loadNotes();
  } else {
      alert('Please enter a note');
  }
}

function loadNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(note => {
      const noteItem = document.createElement('div');
      noteItem.className = 'note-item';
      noteItem.textContent = note;
      notesList.appendChild(noteItem);
  });
}
