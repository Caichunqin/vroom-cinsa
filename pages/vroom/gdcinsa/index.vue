<template>
  <div>
    <div class="banner">
      <video
        id="video-short"
        class="video-js vjs-default-skin"
        preload
        width="3000"
        data-setup="{}"
        autoplay
        muted
        loop
      >
        <source :src="header.shortVideo.url" :type="header.shortVideo.type" />
      </video>
      <div class="video-mask"></div>
      <c-header :showNav="false">
        <template v-slot:subtitle>
          <div class="sub-title">
            <i class="divider fl"></i>
            <h2 class="title fl">粤港澳网络安全虚拟展</h2>
          </div>
        </template>
        <template v-slot:body>
          <div class="header-body" data-slide-up="true">
            <div class="company-logo slide-up delay-2">
              <img :src="header.logoWhiteUrl" alt />
            </div>
            <div class="company-name slide-up delay-5">
              {{ header.companyName }}
            </div>
            <div class="company-desc slide-up delay-8">
              {{ header.companyDesc }}
            </div>
            <a
              class="play-btn slide-up delay-10"
              @click="openVideoModal(header.originVideo)"
            >
              <div class="icon-play"></div>
              观看视频
            </a>
          </div>
        </template>
      </c-header>
    </div>
    <div class="content">
      <div class="tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ on: tab.on }"
          class="tab"
          @click="onTabClick(tab)"
        >
          {{ tab.name }}
        </div>
      </div>
      <div v-if="curTab.id === 'achieve'" class="achieve">
        <section class="cbox cbox-new">
          <div class="cbox-hd">
            <h1 class="cbox-hd-title">{{ news.title }}</h1>
            <span class="cbox-hd-title-en">— {{ news['title-en'] }} —</span>
          </div>
          <div
            class="cbox-bd clearfix"
            data-slide-up="true"
            :style="{ height: isToggle ? newsHeight : defNewsHeight }"
          >
            <a
              v-for="(theNews, newsIndex) in newsList"
              :key="newsIndex"
              v-show="isShowNews(newsIndex)"
              class="ibox"
              :href="theNews.link"
              target="_black"
            >
              <div class="imgbox size-new">
                <img :src="theNews.picUrl" />
              </div>
              <div class="ibox-cnt">
                <h2 class="ibox-title">{{ theNews.title }}</h2>
                <h3 class="ibox-desc">{{ theNews.desc }}</h3>
                <p class="ibox-date">{{ theNews.date }}</p>
              </div>
            </a>
          </div>
          <div v-show="showToggle" @click="onHandleToggle" class="toggle-btn">
            <span>{{ toggleText }}</span>
            <span :class="`arrow-${toggleIcon}`"></span>
          </div>
        </section>
        <section class="cbox cbox-picture" data-slide-up="true">
          <div class="cbox-hd slide-up delay-2">
            <h1 class="cbox-hd-title">{{ pictures.title }}</h1>
            <span class="cbox-hd-title-en">— {{ pictures['title-en'] }} —</span>
          </div>
          <div class="cbox-bd clearfix slide-up delay-5">
            <a
              v-for="(picture, index) in picturesList"
              :key="index"
              class="pbox"
              @click="onPictureClick(index)"
            >
              <div class="imgbox size-picture">
                <img :src="picture.picUrl" />
              </div>
            </a>
          </div>
        </section>
        <section class="cbox cbox-video" data-slide-up="true">
          <div class="cbox-hd slide-up delay-2">
            <h1 class="cbox-hd-title">{{ videos.title }}</h1>
            <span class="cbox-hd-title-en">— {{ videos['title-en'] }} —</span>
          </div>
          <div class="cbox-bd clearfix slide-up delay-5">
            <div
              v-for="(videoItem, vidindex) in videosList"
              :key="vidindex"
              class="vbox"
            >
              <a href="javascript:" @click="openVideoModal(videoItem.video)">
                <div class="imgbox size-video">
                  <img :src="videoItem.picUrl" />
                  <div class="video-mask"></div>
                  <div class="time">{{ videoItem.time }}</div>
                  <div class="icon-play"></div>
                </div>
              </a>
              <div class="vbox-title">{{ videoItem.title }}</div>
            </div>
          </div>
        </section>
      </div>
      <div v-else class="about">
        <p v-for="(intro, introIndex) in about.introduction" :key="introIndex" class="intro-list">
          {{ intro }}
        </p>
        <div class="booth-wrap">
          <transition-group name="slide-fade">
            <div
              class="vbox video-box"
              v-for="(booth, index) in about.booths"
              :key="booth.picUrl"
              v-show="index === curBoothIndex"
            >
              <a href="javascript:" @click="onBoothClick(booth)">
                <div class="imgbox about-video">
                  <img :src="booth.picUrl" />
                  <template v-if="booth.type === 'video'">
                    <div class="video-mask"></div>
                    <div class="time">{{ booth.time }}</div>
                    <div class="icon-play"></div>
                  </template>
                </div>
              </a>
              <div class="title">{{ booth.title }}</div>
            </div>
          </transition-group>
        </div>
        <div class="toggle">
          <div
            v-for="(dot, index) in aboutList"
            :key="index"
            :class="getDotActiveCls(index)"
            @click="onDotClick(index)"
          ></div>
        </div>
      </div>
    </div>
    <c-footer></c-footer>
    <pictures-modal
      v-model="showPicturesModal"
      :active-index="activePictureIndex"
      :list="picturesModalList"
    />
    <videos-modal
      v-model="showVideosModal"
      :url="curVideoUrl"
      :type="curVideoType"
    />
  </div>
</template>

<script>
import dat from '@/assets/js/data'
import picturesModal from '@/components/pictures-modal'
import videosModal from '@/components/videos-modal'
import cHeader from '@/components/c-header'
import cFooter from '@/components/c-footer'

const tabs = [
  {
    name: '成果展示',
    on: true,
    id: 'achieve',
  },
  {
    name: '企业简介',
    on: false,
    id: 'about',
  },
]

export default {
  components: {
    cHeader,
    cFooter,
    picturesModal,
    videosModal,
  },
  data() {
    return {
      header: dat.header,
      news: dat.news,
      pictures: dat.pictures,
      videos: dat.videos,
      about: dat.about,
      tabs,
      curTab: tabs[0],
      activePictureIndex: 1,
      picturesModalList: [],
      maxLength: 8,
      defNewsLength: 4,
      defNewsHeight: '404px',
      isToggle: false,
      toggleText: '展开全部',
      toggleIcon: 'down',
      curBoothIndex: 0,
      curVideoUrl: '',
      curVideoType: '',
      showPicturesModal: false,
      showVideosModal: false,
    }
  },
  computed: {
    newsHeight() {
      return 192 * Math.ceil(this.newsList.length / 2) + 20 + 'px'
    },
    picturesList() {
      const list = this.pictures.list
      return list.length > this.maxLength ? list.slice(0, this.maxLength) : list
    },
    newsList() {
      const list = this.news.list
      return list.length > this.maxLength ? list.slice(0, this.maxLength) : list
    },
    videosList() {
      const list = this.videos.list
      return list.length > 4 ? list.slice(0, 4) : list
    },
    aboutList() {
      const list = this.about.booths
      return list.length > 5 ? list.slice(0, 5) : list
    },
    showToggle() {
      return this.news.list.length > this.defNewsLength
    },
    curVideoTitle() {
      const title = this.curVideo.title
      return title.length > 40 ? title.substring(0, 40) + '...' : title
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
    this.runAnimate()
  },
  methods: {
    runAnimate() {
      $(window).on('scroll.slide-up', function () {
        triggerSlideUp()
      })
      function triggerSlideUp() {
        var $windowScrollTop = $(window).scrollTop()
        var $winHeight = $(window).height()
        $('[data-slide-up="true"]').each(function () {
          var $itemOffsetTop = $(this).offset().top
          var $itemOuterHeight = $(this).outerHeight(true)
          if (
            !($windowScrollTop > $itemOffsetTop + $itemOuterHeight) &&
            !($windowScrollTop < $itemOffsetTop - $winHeight)
          ) {
            $(this).addClass('active')
          }
        })
      }
      triggerSlideUp()
    },
    openVideoModal({ url, type }) {
      this.showVideosModal = true
      this.curVideoUrl = url
      this.curVideoType = type
    },
    openPictureModal(index, pictures) {
      this.showPicturesModal = true
      this.activePictureIndex = index
      this.picturesModalList = pictures
    },
    onTabClick(curTab) {
      this.tabs.forEach((tab) => {
        tab.on = false
      })
      curTab.on = true
      this.curTab = curTab
    },
    onDotClick(index) {
      console.log(index, 'onDotClick')
      this.curBoothIndex = index
    },
    onPictureClick(index) {
      const list = this.pictures.list
      let pictures =
        list.length > this.maxLength ? list.slice(0, this.maxLength) : list
      this.openPictureModal(index, pictures)
    },
    onHandleToggle() {
      this.toggleText = this.isToggle ? '展开全部' : '收起'
      this.toggleIcon = this.isToggle ? 'down' : 'up'
      this.isToggle = !this.isToggle
    },
    onBoothClick(booth) {
      if (booth.type === 'video') {
        this.openVideoModal(booth.video)
      } else {
        let pictures = this.aboutList.filter((booth) => {
          return booth.type === 'image'
        })
        let index = 0
        for (let i = 0; i < pictures.length; i++) {
          let picture = pictures[i]
          if (picture.picUrl === booth.picUrl) {
            index = i
            break
          }
        }
        this.openPictureModal(index, pictures)
      }
    },
    getDotActiveCls(index) {
      return index === this.curBoothIndex ? 'active' : 'inactive'
    },
    isShowNews(index) {
      return this.showToggle
        ? this.isToggle
          ? true
          : index < this.defNewsLength
        : true
    },
  },
}
</script>

<style lang="less" src="./index.less"></style>
