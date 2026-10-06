<template>
  <div>
    <div class="filter-bar">
      <input
        v-model="filterText"
        type="text"
        placeholder="Поиск..."
        class="filter-input"
      />
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.key">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in filteredData" :key="index">
            <td v-for="column in columns" :key="column.key">
              {{ row[column.key] }}
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td :colspan="columns.length" class="empty">
              Ничего не найдено
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      filterText: ''
    }
  },
  computed: {
    filteredData() {
      if (!this.filterText.trim()) return this.data
      const query = this.filterText.toLowerCase()
      return this.data.filter((row) =>
        this.columns.some((col) =>
          String(row[col.key]).toLowerCase().includes(query)
        )
      )
    }
  }
}
</script>

<style scoped>
.filter-bar {
  margin-bottom: 1rem;
}

.filter-input {
  width: 100%;
  max-width: 400px;
  padding: 0.7rem 1.2rem;
  border: 2px solid #f8bbd0;
  border-radius: 40px;
  font-size: 0.95rem;
  color: #880e4f;
  background: white;
  transition: border-color 0.2s ease;
}

.filter-input:focus {
  outline: none;
  border-color: #f48fb1;
  box-shadow: 0 0 0 3px rgba(244, 143, 177, 0.2);
}

.filter-input::placeholder {
  color: #f48fb1;
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background: white;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  font-size: 0.95rem;
}

th,
td {
  padding: 16px 20px;
  border: 1px solid #e8edf4;
  text-align: left;
}

thead {
  background: linear-gradient(145deg, #f8bbd0, #f48fb1);
  color: #880e4f;
}

th {
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-color: #f48fb1;
}

tbody tr:nth-child(even) {
  background-color: #fce4ec;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

tbody tr:hover {
  background-color: #f8bbd0 !important;
  transition: background 0.15s ease;
  cursor: default;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 16px;
}
tbody tr:last-child td:last-child {
  border-bottom-right-radius: 16px;
}

td:last-child {
  font-weight: 600;
  color: #880e4f;
}

.empty {
  text-align: center;
  color: #880e4f;
  font-style: italic;
  padding: 2rem;
}

@media (max-width: 768px) {
  th,
  td {
    padding: 10px 12px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  th,
  td {
    padding: 8px 10px;
    font-size: 0.75rem;
  }
}
</style>