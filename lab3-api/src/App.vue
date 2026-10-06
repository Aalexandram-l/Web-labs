<template>
  <div id="app">
    <header>
      <h1>Нобелевские премии</h1>
    </header>

    <nav>
      <router-link to="/prizes">Премии</router-link>
      <router-link to="/laureats">Лауреаты</router-link>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Нобелевский архив</p>
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
  background: linear-gradient(135deg, #f8bbd0, #f48fb1);
  color: #880e4f;
  padding: 2rem 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(244, 143, 177, 0.4);
}

header h1 {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1.5px;
}

nav {
  background: #fce4ec;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  flex-wrap: wrap;
  border-bottom: 2px solid #f8bbd0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav a {
  color: #880e4f;
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
  background: #f48fb1;
  color: #880e4f;
  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.4);
  transform: translateY(-2px);
}

nav a.router-link-active {
  background: #f48fb1;
  color: #880e4f;
}

main {
  flex: 1;
  width: 100%;
  padding: 1rem 0;
}

footer {
  background: #f8bbd0;
  color: #880e4f;
  text-align: center;
  padding: 1.8rem 1rem;
  font-size: 0.9rem;
  border-top: 1px solid #f48fb1;
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