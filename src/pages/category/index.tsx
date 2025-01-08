import { View } from '@tarojs/components'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'
function Category() {


  return (
    <ConfigProvider>
      <View className='category-container'>

        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default Category
