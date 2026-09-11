<template>
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
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="column in columns" :key="column.key">
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    columns: {
      type: Array,
      required: true,
      validator: (value) => value.every(col => col.key && col.label)
    },
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background: white;
  padding: 2px;
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
  background: linear-gradient(145deg, #0b1a2e, #1f3b54);
  color: white;
}

th {
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-color: #2a4057;
}

tbody tr:nth-child(even) {
  background-color: #f7faff;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

tbody tr:hover {
  background-color: #eaf1fc !important;
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
  color: #1a334a;
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