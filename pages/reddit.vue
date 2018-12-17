<template lang="pug">
  div.reddit-exporter
    div.info.options.container.with-title
      p.title Reddit Backup Tool
      button.btn.is-primary(@click="setOptionsMethod('backup')", style="margin-bottom: 8px") Backup
      button.btn.is-success(@click="setOptionsMethod('restore')") Restore
    transition(name="fade", enter-active-class="fadeInLeft", leave-active-class="fadeOutRight")
      div.info.container.with-title(v-if="method === 'backup'")
        p.title Backup
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis porro animi, voluptas qui nulla, iste sed quo magni hic deleniti nihil facere incidunt est dolorum accusamus quia molestias placeat amet.
        button.btn(@click="method = ''") Cancel
    transition(name="fade", enter-active-class="fadeInLeft", leave-active-class="fadeOutRight")
      div.info.container.with-title(v-if="method === 'restore'")
        p.title Restore
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis porro animi, voluptas qui nulla, iste sed quo magni hic deleniti nihil facere incidunt est dolorum accusamus quia molestias placeat amet.
        button.btn(@click="method = ''") Cancel
</template>

<script>
export default {
  name: 'RedditExporter',
  data () {
    return {
      method: ''
    }
  },
  methods: {
    setOptionsMethod (method) {
      if (this.method === '') {
        this.method = method
      } else if (this.method !== '') {
        this.method = ''
        window.setTimeout(() => {
          this.method = method
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/variables';

  .reddit-exporter {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: $--spacer;
    height: 100%;

    .info {
      width: 700px;
    }

    .info.options {
      position: relative;
    }

    .info:not(:last-child) {
      margin-bottom: $--spacer * 2;
    }
  }
</style>
