<style lang="scss">
  .video-player {
    .plyr {
      height: 100vh;
      width: 100vw;
    }
  }
</style>

<template lang="pug">
  //- video.video-player(ref="videoPlayer", src="https://s3.amazonaws.com/vinh.cloud/Psyduck+Compilation.mp4", controls, preload="auto")
  vue-plyr.video-player(:options="playerOptions")
    video(src="https://s3.amazonaws.com/vinh.cloud/Psyduck+Compilation.mp4", preload="auto")
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
