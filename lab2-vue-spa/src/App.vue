<template>
  <div id="app">
    <header>
      <h1>Нобелевские премии</h1>
      <p>Архив наград с 1901 года</p>
    </header>

    <nav>
      <router-link to="/prizes">Премии</router-link>
      <router-link to="/laureats">Лауреаты</router-link>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Нобелевский архив <span>✦</span></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
  background: #f0f4f9;
  color: #1a2634;
  min-height: 100vh;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: linear-gradient(135deg, #0b1a2e, #1a334a);
  color: white;
  padding: 2rem 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

header h1 {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

header p {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 0.3rem;
  font-weight: 300;
}

nav {
  background: #ffffff;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  flex-wrap: wrap;
  border-bottom: 2px solid #e2e9f2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav a {
  color: #1a334a;
  text-decoration: none;
  font-weight: 600;
  padding: 0.6rem 1.8rem;
  border-radius: 40px;
  transition: all 0.25s ease;
  font-size: 0.95rem;
  background: transparent;
  border: 1px solid transparent;
}

nav a:hover {
  background: #1a334a;
  color: white;
  box-shadow: 0 4px 12px rgba(26, 51, 74, 0.25);
  transform: translateY(-2px);
}

nav a.router-link-active {
  background: #1a334a;
  color: white;
}

main {
  flex: 1;
  width: 100%;
  padding: 1rem 0;
}

footer {
  background: #0b1a2e;
  color: #a0b9d6;
  text-align: center;
  padding: 1.8rem 1rem;
  font-size: 0.9rem;
  border-top: 1px solid #1f3b54;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  header {
    padding: 1.5rem 1rem;
  }
  header h1 {
    font-size: 1.5rem;
  }

  nav {
    gap: 0.3rem;
    padding: 0.6rem 0.5rem;
  }
  nav a {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
