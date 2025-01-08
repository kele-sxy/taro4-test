import { View, Image } from '@tarojs/components'
import { ConfigProvider, SearchBar, Tag } from '@nutui/nutui-react-taro'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'
function Index() {

  const products = [
    {
      id: 1,
      title: '加拿大北极甜虾 1.5kg',
      price: 89.9,
      originalPrice: 181.5,
      image: '虾子图片URL',
      tag: '冷冻',
      sales: '月2400+人已下单',
      badge: '鲜美虾蟹回购榜 TOP1'
    },
    // ... 其他商品数据
  ]

  return (
    <ConfigProvider>
      <View className='page-container'>
        <View className='search-wrapper'>
          <SearchBar placeholder='红虾' />
        </View>
        <View className='scrollable-content'>
          {/* 这里放置可滚动的内容 */}
        </View>
        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default Index
