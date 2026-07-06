<template>
  <div class="slidev-layout section w-full h-full p-14 flex flex-col justify-center bg-moss text-ivory grain">
    <div class="z-10 w-full max-w-3xl">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(h1), :deep(h2), :deep(h3), :deep(.eyebrow) {
  color: var(--ivory) !important;
}
:deep(p) {
  color: rgba(250, 249, 246, 0.8) !important;
  font-size: 1.25rem;
}
</style>
