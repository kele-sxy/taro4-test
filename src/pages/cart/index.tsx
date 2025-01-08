import { View, Image } from '@tarojs/components'
import { ConfigProvider, SearchBar, Tag } from '@nutui/nutui-react-taro'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'
function Cart() {


  return (
    <ConfigProvider>
      <View className='cart-container'>
      </View>

      <CustomTabBar />
    </ConfigProvider >
  )
}

export default Cart
