import React, { useState } from 'react'
import Meals from './components/Meals/Meals'

// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png',
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png',
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png',
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png',
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png',
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png',
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png',
    },
];

const App = () => {

    // 创建一个state用来存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA)

    /**
     * React.Fragment
     *  - 是一个专门用来作为父容器的组件
     *      它只会把它里面的元素直接返回，不会创建任何多余的元素
     *      - 作用：可以在不增加多余的节点的情况下，将多个节点进行返回
     *      - 语法：<React.Fragment>...</React.Fragment>
     *      - 语法糖：<></>  简写形式语法糖
     *  - 当我们需要一个父容器，
     *    但是不想增加多余的节点的时候，就可以使用React.Fragment
     */

    return (
        <div>
            <Meals mealsData={mealsData} />
        </div>
    )
}

export default App
