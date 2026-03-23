<script setup lang="ts">
import { useEventListener } from '@vueuse/core';
import { ref } from 'vue';

useEventListener('beforeunload', (e) => {
    if (isDirty.value) {
        e.preventDefault()
    }
})

const isDirty = ref<boolean>(false)

</script>

<template>
  <h1>My Vike app</h1>
  <p>
    <label>
      <input v-model="isDirty" type="checkbox" name="toggle-dirty">
      Toggle dirty
    </label>
  </p>
</template>
