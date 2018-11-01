// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {AppRegistry, Platform, StyleSheet, FlatList, ScrollView, Text, TextInput, View} from 'react-native';
// import {createStateNavigator} from 'react-navigation'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//
//   // constructor(props){
//   //   super(props);
//   //   this.state = {text:''};
//   // }
//
//   // componentDidMount(){
//   //   return fetch("http:baidu.com",{
//   //       method: "POST",
//   //       headers: {
//   //           Accept: "application/json",
//   //           "Content-Type": "application/json"
//   //       },
//   //       body: JSON.stringify({
//   //           firstParam: "yourValue",
//   //           secondParam: "yourOtherValue"
//   //       })
//   //   }).then(response=>response.json()).then(responseJson => {return responseJson.movies;})
//   //       .catch(error => {console.error(error);});
//   // }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//
//         {/*<TextInput style={{height:40}} placeholder="type here to translate!" onchangetext={(text)=>this.setState({text})} />*/}
//
//         {/*<Text style={{padding:10, fontSize:42}}>*/}
//             {/*{this.state.text.split(" ").map((word) => word && '🍕').join(' ')}*/}
//         {/*</Text>*/}
//
//         {/*<Button onPress={()=>{Alert.alert("你点击了按钮！")}} title="点我！"></Button>*/}
//
//         {/*<View style={styles.container}>*/}
//           {/*<TouchableHighlight onPress={this._onPressButton} underlayColor="white">*/}
//             {/*<View style={styles.button}>*/}
//               {/*<Text style={styles.buttonText}>TouchableHighlight</Text>*/}
//             {/*</View>*/}
//           {/*</TouchableHighlight>*/}
//           {/*<TouchableOpacity onPress={this._onPressButton}>*/}
//             {/*<View style={styles.button}>*/}
//               {/*<Text style={styles.buttonText}>TouchableOpacity</Text>*/}
//             {/*</View>*/}
//           {/*</TouchableOpacity>*/}
//           {/*<TouchableNativeFeedback*/}
//               {/*onPress={this._onPressButton}*/}
//               {/*background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>*/}
//             {/*<View style={styles.button}>*/}
//               {/*<Text style={styles.buttonText}>TouchableNativeFeedback</Text>*/}
//             {/*</View>*/}
//           {/*</TouchableNativeFeedback>*/}
//           {/*<TouchableWithoutFeedback*/}
//               {/*onPress={this._onPressButton}*/}
//           {/*>*/}
//             {/*<View style={styles.button}>*/}
//               {/*<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>*/}
//             {/*</View>*/}
//           {/*</TouchableWithoutFeedback>*/}
//           {/*<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">*/}
//             {/*<View style={styles.button}>*/}
//               {/*<Text style={styles.buttonText}>Touchable with Long Press</Text>*/}
//             {/*</View>*/}
//           {/*</TouchableHighlight>*/}
//         {/*</View>*/}
//
//         {/*<ScrollView >*/}
//           {/*<Text style={{fontSize:96}}>Scroll me plz</Text>*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Text style={{fontSize:96}}>If you like</Text>*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Text style={{fontSize:96}}>Scrolling down</Text>*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Text style={{fontSize:96}}>What's the best</Text>*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Text style={{fontSize:96}}>Framework around?</Text>*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />*/}
//           {/*<Text style={{fontSize:80}}>React Native</Text>*/}
//         {/*</ScrollView>*/}
//
//         {/*<FlatList>*/}
//           {/*data={[*/}
//             {/*{key: 'Devin'},*/}
//             {/*{key: 'Jackson'},*/}
//             {/*{key: 'James'},*/}
//             {/*{key: 'Joel'},*/}
//             {/*{key: 'John'},*/}
//             {/*{key: 'Jillian'},*/}
//             {/*{key: 'Jimmy'},*/}
//             {/*{key: 'Julie'},*/}
//         {/*]}*/}
//           {/*renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}*/}
//         {/*</FlatList>*/}
//
//         {/*<SectionList*/}
//             {/*sections={[*/}
//                 {/*{title: 'D', data: ['Devin']},*/}
//                 {/*{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},*/}
//             {/*]}*/}
//             {/*renderItem={({item}) => <Text style={styles.item}>{item}</Text>}*/}
//             {/*renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}*/}
//             {/*keyExtractor={(item, index) => index}*/}
//         {/*/>*/}
//       </View>
//
//
//
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//     button: {
//         marginBottom: 30,
//         width: 260,
//         alignItems: 'center',
//         backgroundColor: '#2196F3'
//     },
//     buttonText: {
//         padding: 20,
//         color: 'white'
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
//     sectionHeader: {
//         paddingTop: 2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 14,
//         fontWeight: 'bold',
//         backgroundColor: 'rgba(247,247,247,1.0)',
//     },
// });

// import React, {Component} from 'react';
// import {AppRegistry,FlatList,Platform,ScrollView,TouchableNativeFeedback,TouchableWithoutFeedback,TouchableHighlight,TouchableOpacity,StyleSheet, Image, Text,TextInput, View, Button, Alert} from 'react-native';
//
// class Greeting extends Component{
//
//     render(){
//         return(
//           <Text>Hello {this.props.name}!</Text>
//         );
//     }
// }
//
// class Blink extends Component{
//
//     constructor(props){
//         super(props);
//         this.state = {showText: true};
//
//         setInterval(()=>{
//             this.setState(previousState =>{
//                 return {showText: !previousState.showText};
//             });
//         }, 1000);
//     }
//
//     render(){
//         let display = this.state.showText? this.props.text : ' ';
//
//         return(
//             <Text>{display}</Text>
//         );
//     }
// }
//
// class UselessTextInput extends Component{
//
//     render(){
//         return (
//             <TextInput {...this.props}
//                     editable={true}
//                     maxLength={40}
//             />
//         )
//     }
// }
//
// export default class Bananas extends Component{
//
//     constructor(props){
//         super(props);
//         this.state = {text:''};
//     }
//
//     _onPressButton(){
//         Alert.alert("you tapped the button");
//     }
//     _onLongPressButton(){
//         Alert.alert("you long-pressed the button");
//     }
//     render(){
//         let pic = {
//             uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//
//         return (
//             <View style={{ flex:1, flexDirection:"column"}}>
//                 {/*style={{ flex:1, flexDirection:"column", justifyContent:"flex-start"}}*/}
//                 {/*<Text>welcom to react native word</Text>*/}
//                 {/*<Greeting name="Rexxar"/>*/}
//                 {/*<Greeting name="Jaina"/>*/}
//                 {/*<Greeting name="Valeera"/>*/}
//                 {/*<Image source={pic} style={{width: 193, height: 110}}/>*/}
//
//                 {/*<Blink text='I love to blink' />*/}
//                 {/*<Blink text='Yes blinking is so great' />*/}
//                 {/*<Blink text='Why did they ever take this out of HTML' />*/}
//                 {/*<Blink text='Look at me look at me look at me' />*/}
//
//                 {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
//                 {/*<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />*/}
//                 {/*<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />*/}
//
//                 {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
//                 {/*<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />*/}
//                 {/*<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />*/}
//
//                 <ScrollView>
//                     <Text style={{fontSize:96}}>Scroll me plz</Text>
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Text style={{fontSize:96}}>If you like</Text>
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Text style={{fontSize:96}}>Scrolling down</Text>
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Text style={{fontSize:96}}>What's the best</Text>
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Text style={{fontSize:96}}>Framework around?</Text>
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                     <Text style={{fontSize:80}}>React Native</Text>
//                 </ScrollView>
//
//                 <FlatList
//                     data={[
//                         {key: 'Devin'},
//                         {key: 'Jackson'},
//                         {key: 'James'},
//                         {key: 'Joel'},
//                         {key: 'John'},
//                         {key: 'Jillian'},
//                         {key: 'Jimmy'},
//                         {key: 'Julie'},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//
//                 />
//
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//
//                 <View style={{
//                     borderBottomColor:'#000000',
//                     borderBottomWidth:1 }}>
//
//                     <UselessTextInput
//                         multiline={true} numberOfLines={4}
//                         onChangeText={(text)=> this.setState({text})}
//                         value={this.state.text}
//                     />
//                 </View>
//
//                 <Button title="点我！" onPress={()=>{Alert.alert("你点击了按钮！")}}/>
//                 <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableHighlight</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <TouchableOpacity onPress={this._onPressButton}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableOpacity</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableNativeFeedback
//                     onPress={this._onPressButton}
//                     background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//                     </View>
//                 </TouchableNativeFeedback>
//                 <TouchableWithoutFeedback
//                     onPress={this._onPressButton}
//                 >
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//                     </View>
//                 </TouchableWithoutFeedback>
//                 <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>Touchable with Long Press</Text>
//                     </View>
//                 </TouchableHighlight>
//
//
//
//             </View>
//
//
//         )
//     }
// }

import React, {Component} from 'react';
import { FlatList,StyleSheet,Dimensions, ActivityIndicator, Text, View,Button,WebView  } from 'react-native';

import {
    createStackNavigator,
} from 'react-navigation';

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            //<View>
            //<Button
            //    title="Go to Jane's profile"
            //    onPress={() =>
            //        navigate('Profile', { name: 'Jane' })
            //    }
          //  />
          //  </View>
            <View style={styles.container}>
                
                <WebView bounces={false}
                         scalesPageToFit={true}
                         source={{uri:"http://192.168.2.106:9091/app/view/login.jsp",method: 'GET'}}
                         style={{width:deviceWidth, height:deviceHeight}}>
                </WebView>
            </View>
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Welcome one',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
           <Text>this is Jane's profile</Text>
        );
    }
}
const App = createStackNavigator({
   Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

export default App;

// export default class FetchExample extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.state ={ isLoading: true}
//     }
//
//     componentDidMount(){
//         return fetch('https://facebook.github.io/react-native/movies.json')
//             .then((response) => response.json())
//             .then((responseJson) => {
//
//                 this.setState({
//                     isLoading: false,
//                     dataSource: responseJson.movies,
//                 }, function(){
//
//                 });
//
//             })
//             .catch((error) =>{
//                 console.error(error);
//             });
//     }
//
//
//
//     render(){
//
//         if(this.state.isLoading){
//             return(
//                 <View style={{flex: 1, padding: 20}}>
//                     <ActivityIndicator/>
//                 </View>
//             )
//         }
//
//         return(
//             <View style={{flex: 1, paddingTop:20}}>
//                 <FlatList
//                     data={this.state.dataSource}
//                     renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//                     keyExtractor={(item, index) => item.id}
//                 />
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    bigblue:{
        color:"blue",
        fontWeight:"bold",
        fontSize:30,
    },
    red:{
        color:"red",
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

