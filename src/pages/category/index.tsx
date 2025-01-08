import { View, Text, Image } from '@tarojs/components'
import { ConfigProvider } from '@nutui/nutui-react-taro'
import { useState } from 'react'
import './index.less'
import CustomTabBar from '@/components/CustomTabBar'

// Mock数据
const MOCK_CATEGORIES = [
  { id: 1, name: '鱼类' },
  { id: 2, name: '虾蟹类' },
  { id: 3, name: '贝类' },
  { id: 4, name: '海参类' },
  { id: 5, name: '海藻类' }
]

const MOCK_GOODS = {
  1: [
    { id: 1, name: '三文鱼', price: 158, image: 'https://placeholder.com/150' },
    { id: 2, name: '金枪鱼', price: 198, image: 'https://placeholder.com/150' },
    { id: 3, name: '带鱼', price: 68, image: 'https://placeholder.com/150' }
  ],
  2: [
    { id: 4, name: '帝王蟹', price: 998, image: 'https://placeholder.com/150' },
    { id: 5, name: '基围虾', price: 89, image: 'https://placeholder.com/150' },
    { id: 6, name: '龙虾', price: 268, image: 'https://placeholder.com/150' }
  ],
  3: [
    { id: 7, name: '生蚝', price: 15, image: 'https://placeholder.com/150' },
    { id: 8, name: '扇贝', price: 29, image: 'https://placeholder.com/150' },
    { id: 9, name: '青口贝', price: 45, image: 'https://placeholder.com/150' }
  ]
}

function Category() {
  const [activeCategory, setActiveCategory] = useState(1)

  return (
    <ConfigProvider>
      <View className='category-container'>
        <View className='category-sidebar'>
          {MOCK_CATEGORIES.map(category => (
            <View
              key={category.id}
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </View>
          ))}
        </View>

        <View className='category-content'>
          <View className='goods-list'>
            {MOCK_GOODS[activeCategory]?.map(good => (
              <View key={good.id} className='goods-item'>
                <Image className='goods-image' src={good.image} />
                <Text className='goods-name'>{good.name}</Text>
                <Text className='goods-price'>¥{good.price}</Text>
              </View>
            ))}
          </View>
        </View>

        <CustomTabBar />
      </View>
    </ConfigProvider>
  )
}

export default Category
