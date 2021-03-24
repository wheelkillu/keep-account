<template>
  <div class="start">
    <h3 class="title">欢迎来到小孟记账</h3>
    <router-link class="item" to="/money"
      ><div class="link">开始记账<Icon name="finger" /></div
    ></router-link>
  </div>
</template>

<style lang="scss" scoped>
.start {
}
.title {
  color: #899098;
  display: flex;
  margin-top: 200px;
  align-items: center;
  justify-content: center;
  animation: mymove 5s infinite;
}
@keyframes mymove {
  50% {
    color: black;
    letter-spacing: 5px;
  }
}
.link {
  color: #515151;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  .icon {
    margin-left: -10px;
    margin-top: 20px;
    width: 20px;
    height: 20px;
  }
}
</style>
