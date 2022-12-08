<template>
  <div class="printed-qr-code">
    <QrcodeVue
      :value="shareUrl"
      size="100"
      render-as="canvas"
      class="nhsuk-image__img"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QrcodeVue from 'qrcode.vue'

Vue.component('QrcodeVue', QrcodeVue)

export default {
    props: {
        shareUrl: String,
    }
}
</script>

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/images/images';

.printed-qr-code {
  display: none;
}

@media print {
  .printed-qr-code {
    padding-left: 12px;
    display: block;
  }
}
</style>
