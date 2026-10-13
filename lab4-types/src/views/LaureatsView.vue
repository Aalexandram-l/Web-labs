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

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from '../components/DataTable.vue'
import Pagination from '../components/Pagination.vue'
import NobelLaureatsService, { type RawLaureate } from '../api/NobelLaureatsService'
import { DEFAULT_PAGE_SIZE, ERROR_MESSAGES } from '../api/config'

interface Column {
  key: string
  label: string
}

export default defineComponent({
  name: 'LaureatsView',
  components: { DataTable, Pagination },
  data() {
    return {
      service: new NobelLaureatsService(),
      columns: [
        { key: 'name', label: 'Имя / Название' },
        { key: 'birth', label: 'Дата рождения / Основания' },
        { key: 'prizes', label: 'Число премий' }
      ] as Column[],
      laureats: [] as RawLaureate[],
      page: 1,
      perPage: DEFAULT_PAGE_SIZE,
      loading: false,
      error: null as string | null
    }
  },
  mounted() {
    this.loadLaureats()
  },
  methods: {
    async loadLaureats(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        const offset = (this.page - 1) * this.perPage
        this.laureats = await this.service.getLaureats({
          limit: this.perPage,
          offset
        })
      } catch (e) {
        this.error = ERROR_MESSAGES.network
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    changePage(newPage: number): void {
      this.page = newPage
      this.loadLaureats()
    }
  }
})
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