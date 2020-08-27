<template>
  <div class="container">
    <div class="bio">
      <div class="text">
        <h1>{{ header.companyName }}</h1>
        <!-- <nuxt-link to="./h5/intro">查看企业简介 &gt;</nuxt-link> -->
        <nuxt-link :to="{ name: 'vroom-gdcinsa-h5-intro' }"
          >查看企业简介 &gt;</nuxt-link
        >
      </div>
      <div class="logo">
        <img :src="header.logoColorUrl" alt />
      </div>
    </div>

    <div class="video-container">
      <div class="company">{{ header.companyName }}公司网络安全展示视频</div>
      <video
        id="video-origin"
        class="video-js vjs-default-skin"
        preload
        width="3000"
        data-setup="{}"
        controls
        autoplay
      >
        <source :src="header.originVideo.url" :type="header.originVideo.type" />
      </video>
    </div>

    <div class="tabs">
      <span
        :class="`tabs-item ${type === key ? 'tabs-item-active' : ''}`"
        v-for="(tab, key) in tabs"
        :key="key"
        @click="type = key"
        >{{ tab.title }}</span
      >
    </div>

    <ul v-if="type === 'news'" class="news">
      <li v-for="(item, j) in news.list" :key="j">
        <a target="_blank" :href="item.link">
          <div class="image">
            <img :src="item.picUrl" alt />
          </div>
          <div class="text">
            <h4>{{ item.title }}</h4>
            <time>{{ item.date }}</time>
          </div>
        </a>
      </li>
    </ul>

    <ul v-if="type === 'pictures'" class="images">
      <div class="picture-preview">
        <img
          v-for="(item, index) in pictures.list"
          :key="index"
          :src="item.picUrl"
          :alt="item.desc || ''"
          class="picture-preview-img"
          preview="0"
          :preview-text="item.desc || ''"
        />
      </div>
    </ul>

    <ul v-if="type === 'videos'" class="videos">
      <li
        v-for="(item, j) in videos.list"
        :key="j"
        :data-video="item.video.url"
      >
        <div v-if="!item.showVideo" class="poster" @click="showVideo(item)">
          <img :src="item.picUrl" alt />
          <div class="icon-play"></div>
        </div>
        <video v-else :src="item.video.url" controls autoplay></video>
        <h4>{{ item.title }}</h4>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import dat from '@/assets/js/data'
let fontSize
const tabs = {
  news: {
    title: '资讯',
  },
  pictures: {
    title: '图片',
  },
  videos: {
    title: '视频',
  },
}
export default {
  watch: {
    type(val) {
      if (val === 'pictures') {
        this.$previewRefresh()
      }
    },
  },
  data() {
    return {
      header: dat.header,
      pictures: dat.pictures,
      videos: dat.videos,
      news: dat.news,
      tabs,
      type: 'news',
      height: 194,
      width: `calc(50% - 12px)`,
      fontSize: 13,
    }
  },
  created() {
    if (process.client) {
      var t = document.documentElement
      fontSize = (t.clientWidth / 750) * 100
      t.style.fontSize = fontSize + 'px'
    }
  },
  mounted() {
    if (process.client) {
      var t = document.documentElement
      const width = t.clientWidth - 0.3 * fontSize
      this.height = (width * 9) / 16
      const tab1 = document.querySelector('.ant-tabs-tab')
      tab1 && tab1.click()
    }
  },
  methods: {
    goto(item) {
      item.url && (window.location = item.url)
    },
    showVideo(item) {
      this.$set(item, 'showVideo', true)
    },
    tabCallback(key) {
      this.type = key
    },
  },
}
</script>

<style lang="less" src="./index.less"></style>
