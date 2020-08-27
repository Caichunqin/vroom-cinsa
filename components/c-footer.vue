<template>
  <footer class="footer">
    <p>
      <span class="label">主办单位：</span>省委宣传部、省委网信办、省委编办、省教育厅、省公安厅、省广电局、省政务服务数据管理局、省总工会、团省委、省妇联、省通信管理局、人民银行广州分行
    </p>
    <p>
      <a href="http://beian.miit.gov.cn/" target="_blank">
        <span class="label">粤ICP备</span> 2020074206号
      </a>
    </p>
  </footer>
</template>

<style lang="less">
footer {
  font-size: 14px;
  line-height: 22px;
  flex-direction: column;
  margin-top: 120px;
  height: 138px;
  background: #ecf0fb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #071032;

  .label {
    color: #838798;
  }

  p {
    margin: 8px 0 0;
  }

  a {
    color: #071032;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #05f;
    }
  }
}
</style>

