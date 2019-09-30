<template>
  <div class="search-header">
    <div class="input-box">
      <img
        class="icon"
        src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"
      />
      <input name="input" class="keywrod" focus="true" />
      <img
        class="del"
        bindtap="clearKeyword"
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"
      />
    </div>
    <div class="right" bindtap="closeSearch">取消</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container
  min-height 100%
  background-color #f4f4f4
.search-header
  position fixed
  top 0
  width 750rpx
  height 91rpx
  display flex
  background #fff
  border-bottom 1px solid rgba(0, 0, 0, 0.15)
  padding 0 31.25rpx
  font-size 29rpx
  color #333
  .input-box
    position relative
    margin-top 16rpx
    float left
    width 0
    flex 1
    height 59rpx
    line-height 59rpx
    padding 0 20rpx
    background #f4f4f4
    .icon
      position absolute
      top 14rpx
      left 20rpx
      width 31rpx
      height 31rpx
    .del
      position absolute
      top 3rpx
      right 10rpx
      width 53rpx
      z-index 10
    .keywrod
      position absolute
      top 0
      left 40rpx
      width 506rpx
      height 59rpx
      padding-left 30rpx
    .right
      margin-top 24rpx
      margin-left 31rpx
      margin-right 6rpx
      width 58rpx
      height 43rpx
      line-height 43rpx
      float right
.no-search
  height auto
  overflow hidden
  margin-top 91rpx
</style>
