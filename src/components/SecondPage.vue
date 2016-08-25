<template>
  <ons-page>
    <ons-toolbar>
      <div class="left">
        <ons-back-button
          label="Home"
          @click="$pop()"
        >
        </ons-back-button>
      </div>
      <div class="center">
        Second Page
      </div>
    </ons-toolbar>
  </ons-page>
</template>

<script>
  import {OnsBackButton} from 'vue-onsenui';

  export default {
    components: {
      OnsBackButton
    }
  };
</script>

<style>
</style>
