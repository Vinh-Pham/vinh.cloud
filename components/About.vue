<style lang="scss">
  @import '../assets/css/variables';

  .about {
    height: 100%;
    margin: 0;
    padding: 0 !important;

    .el-row {
      height: 100%;

      .left-col {
        background: '#2C8993';
        padding: $--spacer * 4;
      }

      .right-col {
        background: white;
        padding: $--spacer * 4;
        height: 100%;
      }
    }
  }
</style>

<template lang="pug">
  div.page-section.about
    el-row
      el-col.left-col(:span="12")
        h1 About
        p I am a Software Developer from Frisco, Texas.
        p I graduated from the University of North Texas with a Bachelor's of Science in Computer Science.
      el-col.right-col(:span="12")
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque illo sapiente amet commodi sint odio, fuga quia accusantium architecto mollitia fugiat expedita delectus! Harum distinctio in nemo repellendus quis!
</template>
