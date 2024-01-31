function login() {
    
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
  
    
    if (user === '' || pass === '') {
      
      alert('Username dan password tidak boleh kosong');
      return;
    }
  
    
    if (user == "admin" && pass == "admin") {
      alert('Selamat datang admin!');
      window.location.href = 'ADMIN.html';
    } else {
      alert('Username dan password salah!');
    }
  }