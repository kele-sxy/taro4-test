import { View, Image } from '@tarojs/components'
import { ConfigProvider, Cell, Avatar } from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'

function User() {
  // 用户信息（实际项目中应该从状态管理或API获取）
  const userInfo = {
    avatar: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
    nickname: '用户昵称',
    level: '普通会员'
  }

  // 菜单项配置
  const menuItems = [
    { title: '我的订单', icon: '🛍️' },
    { title: '收货地址', icon: '📍' },
    { title: '联系客服', icon: '💬' },
    { title: '设置', icon: '⚙️' }
  ]

  return (
    <ConfigProvider>
      <View className='user-container'>
        {/* 用户信息区域 */}
        <View className='user-info'>
          <Avatar size='large' src={userInfo.avatar} />
          <View className='user-detail'>
            <View className='nickname'>{userInfo.nickname}</View>
            <View className='level'>{userInfo.level}</View>
          </View>
        </View>

        {/* 功能菜单区域 */}
        <View className='menu-section'>
          {menuItems.map((item, index) => (
            <Cell
              key={index}
              title={item.title}
              prefix={<View className='menu-icon'>{item.icon}</View>}
              extra={<ArrowRight />}
              onClick={() => console.log(`点击了${item.title}`)}
            />
          ))}
        </View>

        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default User
