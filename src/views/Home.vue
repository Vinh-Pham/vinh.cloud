<template lang="pug">
  div.home
    div.header.container.is-fluid
      div.title Vinh Pham
      div.menu
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component()
export default class Home extends Vue {

}
</script>

<style lang="scss">
  @import '../style/variables';

  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .header {
      .title {
        text-align: center;
        font-family: 'Sacramento', cursive;
        font-weight: 800;
        font-size: 90px;
      }

      .menu {
        text-align: center;
      }
    }
  }
</style>
