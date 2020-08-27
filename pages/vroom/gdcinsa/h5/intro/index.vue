<template>
  <div class="content">
    <h1 class="head">
      <div class="title">{{ header.companyName }}</div>
      <img :src="header.logoColorUrl" alt class="logo" />
    </h1>
    <div class="banner">
      <no-ssr>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in about.booths" :key="index">
            <div>
              <a :href="item.type==='video' ? item.video.url : item.picUrl">
                <div :style="`background-image:url(${item.picUrl})`" class="slide-img">
                  <img
                    v-if="item.type==='video'"
                    class="video-icon"
                    src="@/assets/icon/icon-play-mobile.svg"
                  />
                </div>
              </a>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </no-ssr>
    </div>
    <div class="descript">
      <p v-for="(text,index) in about.introduction" :key="index">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import dat from '@/assets/js/data'
let fontSize
export default {
  created() {
    if (process.client) {
      var t = document.documentElement
      fontSize = (t.clientWidth / 750) * 100
      t.style.fontSize = fontSize + 'px'
    }
  },
  data() {
    return {
      header: dat.header,
      about: dat.about,
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

<style lang="less" src="./index.less"></style>
