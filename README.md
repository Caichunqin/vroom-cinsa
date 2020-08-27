# 虚拟展厅模板

## 运行项目

```bash
# 安装依赖
$ yarn

# 本地调试
# pc: http://localhost:3000/vroom/digitalgd
# h5: http://localhost:3000/vroom/digitalgd/h5
$ yarn dev

# 打包
$ yarn deploy
```

## 注意

- 数据配置文件地址：`/assets/js/data.js`
- `nuxt.config.js` 配置中的 `//waz.cagd.gov.cn/assets/middleware.js` 为预留入口处理，请不要移除
