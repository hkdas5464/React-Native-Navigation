import React,{useState,useEffect} from 'react';
import { StyleSheet, View,ScrollView ,Button,Dimensions} from 'react-native';
import YouTube  from 'react-native-youtube-iframe';
import Video from '../Data/Data';
import MathVideo from '../Data/Maths_Data';
import { Divider, Text } from 'react-native-paper';
// import Tabs from '../Cards/Tabs';
import Orientation from 'react-native-orientation-locker';
import Tabs from '../Tabs/Tabs';




const MATHS = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [play,setPlay] = useState('FKJvdIIyaVo');
  const [title,setTitle] = useState('Class  01  Percentage')

  useEffect(() => {
    const onOrientationChange = (orientation) => {
      if (orientation === 'LANDSCAPE') {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    Orientation.addOrientationListener(onOrientationChange);

    return () => {
      Orientation.removeOrientationListener(onOrientationChange);
    };
  }, []);

  const onFullScreenChange = (fullScreenStatus) => {
    if (fullScreenStatus) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };



  

  return (
    <View >
      <YouTube
        videoId={play}
        play={true}
        height={220}
        controls={1}
        onChangeState={(event) => console.log(event)}
        onChangeQuality={(event) => console.log(event)}
        onError={(e) => console.log(e)}
        onReady={() => console.log('ready')}
        onFullscreenChange={onFullScreenChange}
        webViewStyle={{ flex: 1 }}
        style={isFullScreen ? styles.fullScreen : styles.normalScreen}
      />
      
      <View style={{ alignItems: 'center',backgroundColor:"#2596be",padding:10}}>
      <Text>{title}</Text>
        
      
    </View>
      
    <ScrollView>
      <View>
        {MathVideo.map((e)=>{
          return(
            <View style={{backgroundColor:"white"}} >
              <Text key={e.id} onPress={()=>{setPlay(e.url) ,setTitle(e.name)}}>
                <Tabs id={e.id} title={e.name}/>
              </Text>
              <Divider/>
              </View>
          )
        })}
      </View>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
  },
  normalScreen: {
    aspectRatio: 16 / 9,
  },
  fullScreen: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
  },
});

export default MATHS;
