<template lang="pug">
  div.banner
    div.title
      div.logo
        img(src='@/assets/img/logo.svg', width='150')
      div.v-typer
        vue-typer(text='Vinh Pham', :typeDelay='500', :preEraseDelay='10000')
      vue-particles(
        color='#000'
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="edge"
        :particleSize="4"
        linesColor="#000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="150"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      )
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)
Vue.use(VueParticles)

@Component()
export default class Home extends Vue {}
</script>

<style lang="scss">
  .banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .title {
      box-sizing: border-box;
      width: 165px;
      display: flex;
      align-items: center;
      flex-direction: column;
      z-index: 999;

      .logo {
        img {
          // filter: drop-shadow(2px 2px 2px #292929);
          // -webkit-filter: drop-shadow(2px 2px 2px #292929);
          // -moz-filter: drop-shadow(2px 2px 2px #292929);
        }
      }
    }

    #particles-js {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

  .vue-typer {
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    font-size: 2rem;
  }

  .vue-typer .custom.char.typed {
  color: black;
  }

  .vue-typer .custom.caret {
    width: 2px;
  }
</style>
