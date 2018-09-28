<style lang="scss">
  .video-player {
    background: black;
    height: 100%;
    width: 100%;
  }
</style>

<template lang="pug">
  video.video-player(ref="videoPlayer", src="https://s3.amazonaws.com/vinh.cloud/Psyduck+Compilation.mp4", controls, preload="auto")
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Mousetrap from 'mousetrap'

@Component()
export default class Psyduck extends Vue {
  volumeInterval = 0.1
  seekInterval = 5

  async mounted() {
    await this.$nextTick()
    const { videoPlayer } = this.$refs

    Mousetrap.bind('k', () => {
      if (videoPlayer.paused) {
        videoPlayer.play()
      } else {
        videoPlayer.pause()
      }
    })

    Mousetrap.bind('left', () => {
      videoPlayer.currentTime = videoPlayer.currentTime - this.seekInterval
    })

    Mousetrap.bind('right', () => {
      videoPlayer.currentTime = videoPlayer.currentTime + this.seekInterval
    })

    Mousetrap.bind('up', () => {
      if (videoPlayer.volume + this.volumeInterval <= 1) {
        videoPlayer.volume = videoPlayer.volume + this.volumeInterval
      }
    })

    Mousetrap.bind('down', () => {
      if (videoPlayer.volume - this.volumeInterval >= 0) {
        videoPlayer.volume = videoPlayer.volume - this.volumeInterval
      }
    })
  }
}
</script>
