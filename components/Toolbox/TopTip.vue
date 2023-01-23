<template>
  <!--<div class="nhsuk-inset-text">
    <h4>Top tip!</h4>
    <p>
      <slot />
    </p>
  </div>-->
  <div class="nhsuk-warning-callout tk-toptip">
    <h4 class="nhsuk-warning-callout__label tk-toptip__label">
      <span role="text">
        Top tip!
      </span>
    </h4>
    <p>
      <slot />
    </p>
  </div>
</template>

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/warning-callout/warning-callout';
</style>
