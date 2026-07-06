<template>
  <div class="slidev-layout default w-full h-full p-14 grain bg-ivory text-forest relative">
    <div class="z-10 h-full flex flex-col">
      <slot />
    </div>
    <div class="absolute bottom-6 right-8 text-stone text-sm font-sans z-10 opacity-60">
      <SlideCurrentNo /> / <SlidesTotal />
    </div>
  </div>
</template>
