import { View } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { Tabbar, TabbarItem } from '@nutui/nutui-react-taro'
import { Home, Category, Cart, User } from '@nutui/icons-react-taro'
import './index.less'

const CustomTabBar = () => {
  const router = useRouter()

  // 根据当前路由获取激活的标签页索引
  const getCurrentTab = () => {
    const routes = [
      '/pages/index/index',
      '/pages/category/index',
      '/pages/cart/index',
      '/pages/user/index'
    ]
    const currentPath = `/${router.path}`
    return routes.indexOf(currentPath)
  }

  const handleSwitch = (value: number) => {
    const routes = [
      '/pages/index/index',
      '/pages/category/index',
      '/pages/cart/index',
      '/pages/user/index'
    ]
    Taro.switchTab({ url: routes[value] })
  }

  return (
    <View className='tab-bar'>
      <Tabbar className="custom-tabbar" fixed value={getCurrentTab()} onSwitch={handleSwitch}>
        <TabbarItem title="首页" icon={<Home />} />
        <TabbarItem title="分类" icon={<Category />} />
        <TabbarItem title="购物车" icon={<Cart />} />
        <TabbarItem title="我的" icon={<User />} />
      </Tabbar>
    </View>
  )
}

export default CustomTabBar 