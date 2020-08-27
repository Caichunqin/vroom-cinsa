<template>
  <header class="header">
    <div class="header-top">
      <div class="wrap clearfix">
        <no-ssr>
          <a class="waz-box fl clearfix" href="/index" target="_blank">
            <div class="logo imgbox">
              <img src="@/assets/imgs/logo-waz.png" alt />
            </div>
            <div class="desc">
              <h1 class="desc-zn">广东省网络安全宣传周</h1>
              <p class="desc-en">Guangdong Cybersecurity week</p>
            </div>
          </a>
          <a
            class="header-subtitle fl"
            v-if="$slots.subtitle"
            href="/virtual-exhibition"
            target="_blank"
          >
            <slot name="subtitle" />
          </a>
          <div v-if="showNav" class="menu fr">
            <a
              v-for="(nav, index) in navList"
              :key="index"
              :href="nav.value"
              class="nav-item"
              :class="navClass[index]"
            >
              <span class="label">{{ nav.title }}</span>
              <div class="border" />
            </a>
          </div>
        </no-ssr>
      </div>
    </div>
    <template v-if="$slots.body">
      <slot name="body" />
    </template>
  </header>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'index',
    },
    showNav: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
  data() {
    return {
      navList: [
        {
          value: '/index',
          title: '首页',
        },
        {
          value: '/virtual-exhibition',
          title: '粤港澳大湾区网络安全虚拟展',
        },
        {
          value: '/cloud-class',
          title: '网安周云峰会与云课程',
        },
        {
          value: '/achieve-exhibition',
          title: '"信息化抗疫"成果展',
        },
        {
          value: '/news',
          title: '新闻资讯',
        },
      ],
    }
  },
  computed: {
    navClass() {
      const nav = [
        'index',
        'virtual-exhibition',
        'cloud-class',
        'achieve-exhibition',
        'news',
      ]
      return nav.map((item) => (item === this.active ? 'on' : ''))
    },
  },
}
</script>

<style lang="less">
.imgbox {
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.header {
  &-top {
    position: relative;
    z-index: 1;
    height: 80px;
    width: 100%;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.15);
    .wrap {
      width: 1200px;
      margin: 0 auto;

      height: 100%;
    }
  }
  &-subtitle {
    height: 100%;
  }
  .waz-box {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .logo {
    width: 48px;
  }
  .desc {
    &-zn {
      font-size: 20px;
      color: #fff;
      letter-spacing: 0;
    }
    &-en {
      font-size: 14px;
      color: #fff;
      letter-spacing: 0;
      line-height: 20px;
      opacity: 0.5;
    }
  }
  .divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
  }
  .title {
    font-size: 18px;
    color: #fff;
    letter-spacing: 0;
    line-height: 28px;
    margin: 0 0 0 16px;
  }
  .menu {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      font-size: 14px;
      color: #fff;
      height: 100%;
      display: block;
      display: flex;
      align-items: center;
      position: relative;
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
      &.on {
        font-size: 18px;
        opacity: 1;
        .border {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 4px;
          background: #fff;
        }
      }
    }
    a + a {
      margin: 0 0 0 50px;
    }
  }
}
</style>
