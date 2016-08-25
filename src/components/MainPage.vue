<template>
  <ons-page>
    <ons-toolbar>
      <div class="center">
        Home
      </div>
    </ons-toolbar>

    <p style="text-align: center;">
      <ons-button
        @click="$push({
          component: 'second-page'
        })"
      >
        Push page
      </ons-button>
    </p>
  </ons-page>
</template>

<script>
  export default {
  };
</script>

<style>
</style>
