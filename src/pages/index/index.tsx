import React, {useEffect} from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default function Index() {
    useEffect(() => {
      console.log('react hooks');
    }, []);

    const handleClick = () => {
      Taro.navigateTo({ url: '/pages/test/index' });
    }

    return (
        <View className='index'>
            <Text onClick={handleClick}>Hello world! 点我</Text>
        </View>
    );
}
