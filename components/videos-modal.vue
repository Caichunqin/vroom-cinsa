<template>
  <div class="video-modal" v-if="currentShow">
    <div class="close">
      <div class="icon-close" @click="currentShow = false"></div>
    </div>
    <video
      id="video-origin"
      class="video-js vjs-default-skin vjs-big-play-centered"
      preload
      width="3000"
      data-setup="{}"
      controls
      autoplay
    >
      <source :src="url" :type="type" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      // 是否显示
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '"video/mp4',
    },
  },
  data() {
    return {
      currentShow: false, // 当前是否显示
      player: null, // 播放器实例
    }
  },
  watch: {
    value(val) {
      this.currentShow = val
    },
    currentShow(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="less">
.video-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #000;

  #video-origin {
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    width: 80%;
    left: 50%;
    height: 90%;
    position: fixed;
  }

  .icon-close {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: url(~@/assets/icon/close.png);
    background-size: 40px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    opacity: 0.8;
  }

  .close {
    width: 40px;
    height: 40px;
    background: rgba(241, 242, 243, 0.1);
    border-radius: 100px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 5%;
    left: 95%;
    transform: translate(-95%, -5%);
  }
}
</style>
