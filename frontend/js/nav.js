// Renders nav bar based on login state
function renderNav() {
  const token = getToken();
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.innerHTML = `
    <div><a href="index.html"><strong>ShopEZ</strong></a></div>
    <div>
      <a href="index.html">Products</a>
      ${token ? `<a href="cart.html">Cart</a><a href="profile.html">Profile</a><a href="#" onclick="logout()">Logout</a>`
              : `<a href="login.html">Login</a><a href="register.html">Register</a>`}
      <a href="admin.html">Admin</a>
    </div>`;
}

function logout() {
  clearToken();
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', renderNav);
