<style lang="scss">
  .video-player {
    .plyr {
      height: 100vh;
      width: 100vw;
    }
  }
</style>

<template lang="pug">
  vue-plyr.video-player(:options="playerOptions")
    video(src="https://d3p9nru6jnw4jy.cloudfront.net/Psyduck+Compilation.mp4", preload="auto")
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component()
export default class Psyduck extends Vue {
  playerOptions = {
    controls: ['play-large', 'play', 'rewind', 'fast-forward', 'progress', 'current-time', 'mute', 'volume', 'pip', 'airplay', 'settings', 'fullscreen'],
    seekTime: 5,
    keyboard: { focused: true, global: true }
  }
}
</script>
