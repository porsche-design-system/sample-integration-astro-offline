<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <section class="vue-example" aria-labelledby="vue-example-heading">
    <p-heading id="vue-example-heading" tag="h2">Vue + PDS Web Components</p-heading>
    <p-text>
      Vue manages the state. The controls are web components from
      <code>@porsche-design-system/components-js</code>.
    </p-text>
    <p-text>Counter: <output aria-label="Counter value">{{ count }}</output></p-text>
    <div class="actions">
      <p-button type="button" icon="add" @click="count += 1">Increase counter</p-button>
      <p-button type="button" variant="secondary" :disabled.attr="count === 0 ? '' : null" @click="count = 0">
        Reset counter
      </p-button>
    </div>
  </section>
</template>

<style scoped>
.vue-example {
  display: grid;
  gap: var(--p-spacing-static-md);
  margin: var(--p-spacing-fluid-md);
  padding: var(--p-spacing-fluid-md);
  border-radius: var(--p-radius-lg);
  background: var(--p-color-canvas);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--p-spacing-static-sm);
}
</style>
