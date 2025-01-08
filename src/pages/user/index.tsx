import { View } from '@tarojs/components'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'
function User() {


  return (
    <ConfigProvider>
      <View className='user-container'>

        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default User
