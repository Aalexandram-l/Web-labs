<template>
  <div class="view-container">
    <h2>Лауреаты Нобелевской премии</h2>

    <div v-if="loading" class="status">Загрузка...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <template v-else>
      <DataTable :columns="columns" :data="laureats" />
      <Pagination :current-page="page" @change="changePage" />
    </template>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import Pagination from '../components/Pagination.vue'
import NobelLaureatsService from '../api/NobelLaureatsService'

export default {
  name: 'LaureatsView',
  components: { DataTable, Pagination },
  data() {
    return {
      service: new NobelLaureatsService(),
      columns: [
        { key: 'name', label: 'Имя / Название' },
        { key: 'birth', label: 'Дата рождения / Основания' },
        { key: 'prizes', label: 'Число премий' }
      ],
      laureats: [],
      page: 1,
      perPage: 25,
      loading: false,
      error: null
    }
  },
  mounted() {
    this.loadLaureats()
  },
  methods: {
    async loadLaureats() {
      this.loading = true
      this.error = null
      try {
        const offset = (this.page - 1) * this.perPage
        this.laureats = await this.service.getLaureats({
          limit: this.perPage,
          offset
        })
      } catch (e) {
        this.error = 'Не удалось загрузить данные. Проверьте интернет.'
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    changePage(newPage) {
      this.page = newPage
      this.loadLaureats()
    }
  }
}
</script>

<style scoped>
.view-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
}

h2 {
  font-size: 1.8rem;
  color: #880e4f;
  margin-bottom: 1.8rem;
  border-bottom: 3px solid #f48fb1;
  padding-bottom: 0.6rem;
}

.status {
  text-align: center;
  padding: 2rem;
  color: #880e4f;
  font-size: 1.1rem;
}

.status.error {
  color: #c2185b;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.3rem;
  }
}
</style>