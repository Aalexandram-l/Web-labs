<template>
  <div class="view-container">
    <h2>Нобелевские премии</h2>

    <div v-if="loading" class="status">Загрузка...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <template v-else>
      <DataTable :columns="columns" :data="prizes" />
      <Pagination :current-page="page" @change="changePage" />
    </template>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import Pagination from '../components/Pagination.vue'
import NobelPrizesService from '../api/NobelPrizesService'

export default {
  name: 'PrizesView',
  components: { DataTable, Pagination },
  data() {
    return {
      service: new NobelPrizesService(),
      columns: [
        { key: 'category', label: 'Категория' },
        { key: 'date', label: 'Дата вручения' },
        { key: 'grant', label: 'Стоимость гранта (млн SEK)' }
      ],
      prizes: [],
      page: 1,
      perPage: 25,
      loading: false,
      error: null
    }
  },
  mounted() {
    this.loadPrizes()
  },
  methods: {
    async loadPrizes() {
      this.loading = true
      this.error = null
      try {
        const offset = (this.page - 1) * this.perPage
        this.prizes = await this.service.getPrizes({
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
      this.loadPrizes()
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