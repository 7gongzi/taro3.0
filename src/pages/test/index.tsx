import React, {Component} from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class Test extends Component {
    onReachBottom() {
        alert('onReachBottom');
    }

    onPageScroll() {
        // 不生效
        console.log('onPageScroll');
    }

    handleClick = () => {
        // ok
        // Taro.navigateTo({ url: '/pages/index/index' });

        // error
        Taro.navigateTo({ url: '/pages/index/index?id=1' });
    };

    render() {
        return (
            <View>
                <Text onClick={this.handleClick}>点我会报错</Text>
                <View style={{height: '2200px'}}>
                    往下拉 dun dun dun
                    <View>onPageScroll 并没有生效</View>
                </View>
                <Text>别拉了，到底了!</Text>
            </View>
        );
    }
}
