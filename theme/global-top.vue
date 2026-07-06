<template>
  <svg
    v-if="!$slidev?.nav?.currentSlideRoute?.meta?.slide?.frontmatter?.hideLogo"
    viewBox="0 0 500 150"
    aria-label="Boxify Logo"
    style="position: absolute; top: 1.5rem; right: 2rem; height: 2.5rem; z-index: 50;"
  >
    <text
      x="10"
      y="115"
      style="font-family: 'Georgia', serif; font-size: 130px; letter-spacing: -2px; fill: #112A20;"
    >Boxify<tspan style="fill: #1F4C3B;">.</tspan></text>
  </svg>
</template>
