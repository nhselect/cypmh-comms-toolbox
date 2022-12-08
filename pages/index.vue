<template>
  <div class="nhsuk-width-container-fluid tbox-container">
    <div class="tbox-header nhsuk-grid-row">
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-column-full nhsuk-u-reading-width">
          <h1 class="nhsuk-heading-xl nhsuk-u-font-size-64">
            <span class="nhsuk-caption-l">
              Children and Young People with Mental Health Needs, Autism or Learning Disability
            </span>
            Communication Toolbox
          </h1>
          <NuxtContent :document="intro" />
        </div>
      </div>
    </div>
    <div
      class="tbox-contents nhsuk-grid-row"
    >
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-column-full">
          <nav id="contents" class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
            <h2>Contents:</h2>
            <ol class="nhsuk-contents-list__list">
              <li
                class="nhsuk-contents-list__item"
                v-for="(section,index) in contents"
                :key="section"
              >
                <NuxtLink
                  class="nhsuk-contents-list__link"
                  :to="'#tkit-section-'+index"
                >
                {{ section }}
                </NuxtLink>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
      
    <div
      v-for="(item, index) in items"
      :key="item.title"
      class="tbox-section nhsuk-grid-row"
    >
      <div 
        v-if="item.backdrop"
        class="tbox-section--backdrop"
        :style="'backgroundImage:url(/img/'+item.backdrop+')'"
        ></div>
      <div class="nhsuk-width-container">
        <div class="nhsuk-grid-column-three-quarters nhsuk-u-padding-top-9 nhsuk-u-padding-bottom-5 nhsuk-u-padding-right-7">
          <div class="nhsuk-u-reading-width">
            <div class="nhsuk-back-link">
              <a class="nhsuk-back-link__link" href="#contents">
                <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
                  <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
                </svg>
                Back to top
              </a>
            </div>
            <h2 
              v-if="!item.hideTitle"
              :id="'tkit-section-'+index"
              class="tkit-section--header"
            >
              {{ item.title }}
            </h2>          
            <NuxtContent :document="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const items = await $content('sections').sortBy('order').fetch()
    const intro = await $content('introduction').fetch()
    if(items.length > 0) {
      const contents = items.map((i) => i.title)
      return { items, intro, contents }
    }
    return []
  }
}
</script>

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/contents-list/contents-list';
@import 'node_modules/nhsuk-frontend/packages/components/card/card';
@import 'node_modules/nhsuk-frontend/packages/components/back-link/back-link';

.tbox-container {
  margin: 0 16px !important;
}

.tbox-header {
  h1 {
    color: $color_nhsuk-blue;
  }
}

.tbox-section.nhsuk-grid-row {
  position: relative;

  > .tbox-section--backdrop {
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 50%;
  }

  > .nhsuk-width-container {
    position: relative;
  }

  .nhsuk-grid-column-three-quarters {
    background-color: $color_nhsuk-grey-5;

    .nhsuk-icon.nhsuk-icon__chevron-left {
      rotate: 90deg;
    }
  }

  &:nth-child(odd) {
    background-color: lighten($color_nhsuk-grey-5,3%);

    .nhsuk-grid-column-three-quarters {
      background-color: lighten($color_nhsuk-grey-5,3%);
    }
  }
}

.nuxt-content {
  p {
    a {
      font-weight: $nhsuk-font-bold;
    }
  }
}
</style>
