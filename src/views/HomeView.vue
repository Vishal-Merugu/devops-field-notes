<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import DayMatrix from "../components/DayMatrix.vue";
import { days, suggestedAreas } from "../data/journal";

const completed = computed(
  () => days.filter((day) => day.status === "completed").length,
);
const percent = computed(() =>
  Math.round((completed.value / days.length) * 100),
);
</script>

<template>
  <div class="page-wrap">
    <section class="hero editorial-grid">
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="signal"></span> KODEKLOUD LEARNING JOURNAL · 2026
        </p>
        <h1>Make the work<br /><em>observable.</em></h1>
        <p class="lead">
          A 100-day field journal for learning how software gets built, shipped,
          and kept running. The notes come later. The structure starts now.
        </p>
        <div class="hero-actions">
          <a class="button button-dark" href="#journey"
            >Browse the journal <span>↓</span></a
          ><RouterLink class="button button-light" to="/day/1"
            >Open day 01 <span>↗</span></RouterLink
          >
        </div>
      </div>
      <aside class="black-note">
        <div class="note-label">WORKING PRINCIPLE <span>●</span></div>
        <p>learn<br />break<br />observe<br />improve</p>
        <div class="note-bottom">
          No highlight reel.<br />A record of the work.
        </div>
      </aside>
    </section>

    <section class="stats" aria-label="Journey summary">
      <div>
        <strong>{{ completed }}</strong
        ><span>days completed</span>
      </div>
      <div><strong>100</strong><span>planned entries</span></div>
      <div>
        <strong>{{ percent }}%</strong><span>journey complete</span>
      </div>
      <div><strong>01</strong><span>first entry ready</span></div>
    </section>

    <section id="journey" class="section-grid">
      <div class="rail"><span>01</span><span>JOURNEY</span></div>
      <div class="section-content">
        <div class="section-intro">
          <div>
            <p class="eyebrow">THE LOGBOOK · 01—100</p>
            <h2>Every day leaves a trace.</h2>
          </div>
          <p>
            Open any day to read its Markdown template. Planned entries are
            invitations to add only what you actually learned.
          </p>
        </div>
        <DayMatrix />
      </div>
    </section>

    <section class="section-grid areas-section">
      <div class="rail"><span>02</span><span>AREAS</span></div>
      <div class="section-content">
        <div class="section-intro">
          <div>
            <p class="eyebrow">SUGGESTED AREAS</p>
            <h2>A map, not a syllabus.</h2>
          </div>
          <p>
            Broad navigation categories to help organize curiosity. They are not
            claims about the confirmed KodeKloud daily syllabus.
          </p>
        </div>
        <div class="area-matrix">
          <article
            v-for="[number, title, description] in suggestedAreas"
            :key="number"
          >
            <span class="area-number">{{ number }}</span>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="closing">
      <p class="eyebrow">THE POINT IS THE PRACTICE</p>
      <h2>Small experiments.<br /><em>Clear notes.</em></h2>
    </section>
  </div>
</template>
