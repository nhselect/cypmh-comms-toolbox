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
        :src="'img/'+link.img" 
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
        <p class="tk-attribution" v-if="link.attribution">
          {{  link.attribution  }}
        </p>
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

.nhsuk-card__img {
  height: 100px;
  object-fit: cover;
  filter: brightness(0.95) contrast(0.95);
  position: relative;
}

p.tk-attribution {
  font-size: 0.75em;
  line-height: 1.2em;
  color: $color_nhsuk-grey-2;
}
</style>
