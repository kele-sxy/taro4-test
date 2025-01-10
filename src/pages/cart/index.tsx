import { View, Image } from '@tarojs/components'
import { ConfigProvider, Button, InputNumber } from '@nutui/nutui-react-taro'
import { useState } from 'react'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'

function Cart() {
  // 购物车商品数据
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '商品1',
      price: 99,
      quantity: 1,
      image: 'https://placeholder.com/150'
    },
    {
      id: 2,
      name: '商品2',
      price: 199,
      quantity: 1,
      image: 'https://placeholder.com/150'
    }
  ])

  // 更新商品数量
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  // 计算总价
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <ConfigProvider>
      <View className='cart-container'>
        {/* 购物车商品列表 */}
        {cartItems.map(item => (
          <View key={item.id} className='cart-item'>
            <Image src={item.image} className='item-image' />
            <View className='item-info'>
              <View className='item-name'>{item.name}</View>
              <View className='item-price'>¥{item.price}</View>
              <InputNumber
                min={1}
                max={99}
                value={item.quantity}
                onChange={(val) => updateQuantity(item.id, val)}
              />
            </View>
          </View>
        ))}

        {/* 底部结算栏 */}
        <View className='cart-footer'>
          <View className='total-price'>
            总计：¥{total}
          </View>
          <Button type='primary'>结算</Button>
        </View>
      </View>

      <CustomTabBar />
    </ConfigProvider>
  )
}

export default Cart
