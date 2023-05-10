import posthog from 'posthog-js'
import Vue from 'vue'

export default function({ app: { router } }, inject) {
  // Init PostHog
  posthog.init('phc_ola4GzW4O4KG0U5cTbyKJpyRL3KBx9W2YRUbbqy1lLb', {
    api_host: 'https://eu.posthog.com',
    autocapture: true,
    persistence: 'memory',
    capture_pageview: false,
    // loaded: () => posthog.identify('unique_id') // If you can already identify your user
  })

  // Inject PostHog into the application and make it available via this.$posthog (or app.$posthog)
  inject('posthog', posthog)

  // Make sure that pageviews are captured with each route change
  router.afterEach(to => {
    Vue.nextTick(() => {
      /* Note: this might also be a good place to call posthog.register(...) in order to update your properties
      on each page view
      */
      posthog.capture('$pageview', {
        $current_url: to.fullPath
      })
    })
  })
}