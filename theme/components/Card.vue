<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div
    :class="[
      'boxify-card',
      variant === 'moss' ? 'boxify-card-moss' : '',
      variant === 'clay' ? 'boxify-card-clay' : '',
    ]"
  >
    <slot />
  </div>
</template>
