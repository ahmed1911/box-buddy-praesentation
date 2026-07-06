<template>
  <div class="slidev-layout quote w-full h-full p-14 flex flex-col justify-center items-center bg-clay text-moss grain relative">
    <div class="text-6xl text-moss opacity-20 absolute top-20 left-20 font-serif">"</div>
    <div class="z-10 w-full max-w-4xl text-center">
      <div class="text-4xl md:text-5xl font-serif leading-tight mb-8">
        <slot />
      </div>
      <div class="text-lg font-sans font-medium text-moss opacity-80 uppercase tracking-widest text-sm">
        <slot name="author" />
      </div>
    </div>
  </div>
</template>
