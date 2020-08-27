<template>
  <div class="pictures-modal" v-if="currentShow">
    <div class="wrapper">
      <div class="title">查看图片</div>
      <transition-group name="slide-fade">
        <div
          class="cur-img"
          v-for="(photo,index) in list"
          :key="photo.picUrl"
          v-show="index===curIndex"
          :style="{background: `url(${photo.picUrl}) no-repeat center/cover`}"
        ></div>
      </transition-group>
      <div class="desc">第 {{ curIndex + 1 }} 张，共 {{ list.length }} 张</div>
      <div v-show="showPrevious" class="left">
        <div class="arrow-left" @click="onHandlePrevious"></div>
      </div>
      <div v-show="showNext" class="right">
        <div class="arrow-right" @click="onHandleNext"></div>
      </div>
      <div class="close">
        <div class="icon-close" @click="currentShow=false"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    value: {
      // 是否显示
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      curIndex: this.activeIndex,
      showPrevious: false,
      showNext: true,
      currentShow: false,
    }
  },
  watch: {
    activeIndex(val) {
      this.curIndex = val
    },
    curIndex() {
      this.showNext = this.curIndex < this.list.length - 1
      this.showPrevious = this.curIndex > 0
    },
    value(val) {
      this.currentShow = val
    },
    currentShow(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    onHandlePrevious() {
      this.curIndex -= 1
    },
    onHandleNext() {
      this.curIndex += 1
    },
  },
}
</script>

<style lang="less">
.pictures-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(7, 16, 50, 0.9);
  z-index: 99;
  transition: all 0.2s;
  touch-action: none;
  user-select: none;

  .wrapper {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }

  .title {
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin-top: 5%;
  }

  .desc {
    padding: 9px 16px;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-size: 14px;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -90%);
  }

  .cur-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 600px;
  }

  .left,
  .right,
  .close {
    width: 40px;
    height: 40px;
    background: rgba(241, 242, 243, 0.1);
    border-radius: 100px;
    position: absolute;
    cursor: pointer;
  }
  .left {
    top: 50%;
    left: 5%;
    transform: translate(-5%, -50%);
  }
  .right {
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
  }
  .close {
    top: 5%;
    left: 95%;
    transform: translate(-95%, -5%);
  }
  .arrow-left,
  .arrow-right,
  .icon-close {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    opacity: 0.8;
  }
  .arrow-left {
    background: url(~@/assets/icon/arrow-left.png);
    background-size: 40px;
  }
  .arrow-right {
    background: url(~@/assets/icon/arrow-right.png);
    background-size: 40px;
  }
  .icon-close {
    background: url(~@/assets/icon/close.png);
    background-size: 40px;
  }
}
</style>
