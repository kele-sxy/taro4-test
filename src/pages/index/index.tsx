import { View, Image, Button, Text } from '@tarojs/components'
import { ConfigProvider, SearchBar } from '@nutui/nutui-react-taro'
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
          {/* 分享按钮区域 */}
          {/* <View className='share-section'>
            <Button className='share-button' openType='share'>
              <View className='share-text'>分享给好友</View>
              <View className='share-desc'>邀请好友一起来购物</View>
            </Button>
          </View> */}

          {/* 热门销售列表 */}
          <View className='hot-sales'>
            <View className='section-title'>热门销售</View>
            <View className='products-grid'>
              {products.map(product => (
                <View key={product.id} className='product-card'>
                  <Image className='product-image' src={product.image} mode='aspectFill' />
                  <View className='product-info'>
                    <View className='product-title'>{product.title}</View>
                    <View className='product-tag'>{product.tag}</View>
                    <View className='product-badge'>{product.badge}</View>
                    <View className='product-sales'>{product.sales}</View>
                    <View className='price-row'>
                      <Text className='price'>¥{product.price}</Text>
                      <Text className='original-price'>¥{product.originalPrice}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default Index
