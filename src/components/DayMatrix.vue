<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { days } from "../data/journal";

const query = ref("");
const status = ref("all");
const area = ref("all");
const areas = [...new Set(days.map((day) => day.area))];
const filteredDays = computed(() =>
  days.filter((day) => {
    const haystack = `${day.day} ${day.title} ${day.description}`.toLowerCase();
    return (
      haystack.includes(query.value.toLowerCase()) &&
      (status.value === "all" || day.status === status.value) &&
      (area.value === "all" || day.area === area.value)
    );
  }),
);
</script>

<template>
  <div class="matrix-tools" aria-label="Journal filters">
    <label class="search-field"
      ><span aria-hidden="true">⌕</span
      ><input
        v-model="query"
        type="search"
        placeholder="Search days…"
        aria-label="Search days"
    /></label>
    <select v-model="status" aria-label="Filter by status">
      <option value="all">All statuses</option>
      <option value="planned">Planned</option>
      <option value="completed">Completed</option>
    </select>
    <select v-model="area" aria-label="Filter by suggested area">
      <option value="all">All areas</option>
      <option v-for="item in areas" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
  <p class="results-count" aria-live="polite">
    {{ filteredDays.length }} of 100 days shown
  </p>
  <div v-if="filteredDays.length" class="day-matrix">
    <RouterLink
      v-for="day in filteredDays"
      :key="day.day"
      class="day-row"
      :to="`/day/${day.day}`"
    >
      <span class="day-number">{{ String(day.day).padStart(2, "0") }}</span
      ><span class="day-copy"
        ><strong>{{ day.title }}</strong
        ><small>{{ day.description }}</small></span
      ><span class="status-mark" :class="day.status">{{
        day.status === "completed" ? "Completed" : "Planned"
      }}</span
      ><span class="row-arrow" aria-hidden="true">↗</span>
    </RouterLink>
  </div>
  <div v-else class="empty-state">
    <strong>No matching days.</strong
    ><span>Try a broader search or clear one of the filters.</span>
  </div>
</template>
