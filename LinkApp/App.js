/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, Dimensions,Alert,BackAndroid} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import RNExit from 'react-native-exit-app';
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);  // 这里可以自定义来设置显示时间,让其暂停1秒后,再跳转到主页面
    }
    //接收HTML发出的数据 http://60.174.80.81:8090
    onMessage = (e) => {
        //BackAndroid.exitApp();
        if(e.nativeEvent.data === 'exit'){
            RNExit.exitApp();
        }
        //Alert.alert(e.nativeEvent.data)
    }
  render() {
    return (
      <View style={styles.container}>
        <WebView bounces={false} onMessage={this.onMessage.bind(this)}
                         scalesPageToFit={true}
                         source={{uri:"http://192.168.2.122:8089/link/mobile/page/login/login.html",method: 'GET'}}
                         style={{width:deviceWidth, height:deviceHeight}}>
                </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
