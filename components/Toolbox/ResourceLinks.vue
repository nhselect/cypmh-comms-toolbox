<template>
  <ul class="nhsuk-grid-row nhsuk-card-group">
    <li
      v-for="link in links"
      :key="link.url"
      class="nhsuk-grid-column-one-third nhsuk-card-group__item"
    >
    <div class="nhsuk-card nhsuk-card--clickable">
      <img 
        v-if="link.img"
        class="nhsuk-card__img" 
        :src="link.img" 
        alt=""
      >
      <div class="nhsuk-card__content">
        <h4 class="nhsuk-card__heading nhsuk-heading-xs">
          <a
            :href="link.url"
            class="nhsuk-card__link"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </h4>
      </div>
    </div>
    </li>
  </ul>
</template>

<script>
export default {
    props: {
        links: Array,
    }
}
</script>

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/card/card';
</style>
