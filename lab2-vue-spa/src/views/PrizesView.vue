<template>
  <div class="view-container">
    <h2>Нобелевские премии</h2>
    <DataTable :columns="columns" :data="prizes" />
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import { prizesData } from '../data/mockData'

export default {
  name: 'PrizesView',
  components: {
    DataTable
  },
  data() {
    return {
      columns: [
        { key: 'category', label: 'Категория' },
        { key: 'date', label: 'Дата вручения' },
        { key: 'grant', label: 'Стоимость гранта (млн SEK)' }
      ],
      prizes: prizesData
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

@media (max-width: 768px) {
  h2 {
    font-size: 1.3rem;
  }
}
</style>
