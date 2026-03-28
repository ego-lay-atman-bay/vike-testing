<script setup lang="ts">
import { useEventListener } from '@vueuse/core';
import { ref } from 'vue';
import Link from '../../components/Link.vue';
import { useIsDirty } from '../../composables/useIsDirty';

const isDirty = useIsDirty()

useEventListener('beforeunload', (e) => {
    if (isDirty.value) {
        e.preventDefault()
    }
})

</script>

<template>
  <h1>My Vike app</h1>
  <p>
    <label>
      <input v-model="isDirty" type="checkbox" name="toggle-dirty">
      Toggle dirty
    </label>
  </p>
  <Link
    href="https://example.com"
  >
    External link
  </Link>
</template>
