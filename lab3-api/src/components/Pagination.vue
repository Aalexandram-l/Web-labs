<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="$emit('change', currentPage - 1)"
    >
      ← Назад
    </button>

    <span class="page-info">
      Страница <strong>{{ currentPage }}</strong>
    </span>

    <button @click="$emit('change', currentPage + 1)">
      Вперёд →
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['change']
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.pagination button {
  background: #f48fb1;
  color: #880e4f;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.pagination button:hover:not(:disabled) {
  background: #f06292;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.4);
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-info {
  color: #880e4f;
  font-size: 0.95rem;
}

.page-info strong {
  font-weight: 700;
}
</style>