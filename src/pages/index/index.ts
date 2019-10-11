declare namespace IndexPage {
  interface IDataType {
    /** 用户信息 */
    canIUse: boolean
  }
  interface ICustomOption {
    /** 登录 */
    bindGetUserInfo(e: any): void
  }
}


Page<IndexPage.IDataType, IndexPage.ICustomOption>({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad() {
    wx.getSetting({
      success: (res) =>{
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
})
