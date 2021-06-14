import React, { useState, useEffect } from 'react';
import { StyleSheet,View,Text,Slider,Dimensions } from 'react-native'
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, HEIGHT } = Dimensions.get('window');

const TrailerScreen = ({navigation}) =>{
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0.1);
    const [paused, setPaused] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [currentPlayingIndex, setCurrentplayingIndex] = useState(0);
    const [productIds, setProductIds] = useState([]);
    const [showplayNextBtn, setShowplayNextBtn] = useState(false);

    const getTime = (t) => {
        const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec;
      };
    
      const getTimeGreterOneSec = (t) => {
        const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
        const sec = digit(Math.floor((t % 60) + 1));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec;
      };
    
      const load = ({ duration }) => setDuration(duration);
      const progress = ({ currentTime }) => setCurrentTime(currentTime);
    
      const onslide = (slide) => {
    
        video.seek(slide * duration);
        clearTimeout(overlayTimer);
        const overlayTimer = setTimeout(() => setOverlay(false), 5000);
        onVideoEnd(currentTime)
      };
    
      const onVideoEnd = (currenttime) => {
        if (getTime(currentTime) == getTime(duration)) {
          if (showplayNextBtn == false) {
            onBtnBackTap()
          } else {
            onBtnNextTap()
          }
        }
      }
    
      const onBtnBackTap = () => {
    
        if (productIds.length > 0) {
          callBulkCartUpdateApi()
        }
        setPaused(true)
        props.navigation.goBack()
        rotate()
    
      }
    
    
      const onBtnNextTap = e => {
        if (currentPlayingIndex < videos.length - 1) {
          showhideViews(currentPlayingIndex + 1)
          setCurrentplayingIndex(currentPlayingIndex + 1)
          showHideCartButtons(currentPlayingIndex + 1)
          setPaused(false)
        }
    
      }
    
    
      const rotate = () => {
        if (!DeviceInfo.isTablet()) {
          Orientation.lockToPortrait()
          if (Platform.OS == 'ios') {
            NativeModules.VideoPlayer.rotatePortrait()
          }
        } else {
          // Orientation.unlockAllOrientations()
        }
      }
    return(
        <View style={styles.container}>
            <Video
         // fullscreen={Orientation.lockToLandscape()}
        paused={paused}
        ref={(ref) => (video = ref)}
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
           
        }}
        style={styles.video}
        resizeMode="cover"
        onEnd={() => {
          onVideoEnd()
        }}
        onLoad={load}
        onProgress={progress}
        onEnd={() => {
          if (getTime(duration) === getTime(currentTime) || getTime(duration) === getTimeGreterOneSec(currentTime))
            onBtnNextTap()
        }
        }
      />
          <Icon onPress={()=>navigation.navigate("Detail")} style={{bottom:200}} name="close" size={30} color="white" />
       
            <View style={{ marginHorizontal: 15 }}>

              <View style={styles.timer}>
                <Text style={styles.sliderCont}>{getTime(currentTime)}</Text>
                <Text style={styles.sliderCont}>{getTime(duration)} </Text>
              </View>
              <Slider
                maximumTrackTintColor="#fff"
                minimumTrackTintColor="red"
                thumbTintColor="red"
                value={currentTime / duration}
                onValueChange={onslide}
              />

            </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    sliderCont: { 
        color: "gray"
     },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    //backgroundColor:'blue',
   // top:200,
  },
  video: { width, height: width * 0.6, backgroundColor: 'black' },
})
export default TrailerScreen;