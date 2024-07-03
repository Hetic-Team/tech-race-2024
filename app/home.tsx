import { Image, StyleSheet, Platform, View } from 'react-native';
import Video from 'react-native-video';
import { CAMERA_URL } from '@/constants/Urls';
import { Joystick } from '@/components/Joystick';

export default function HomeScreen() {
    return (
      <View>
        {/* <Video
        source={{ uri: 'http://192.168.36.10:7000/' }} // URL to the live stream
        style={styles.video}
        controls={true} // Show media controls
        resizeMode="contain" // Adjusts the video to maintain its aspect ratio while fitting within the screen
        onError={(e) => {
          console.log('Error loading video:', e);
        }}
      /> */}
            <Joystick />
      </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    },
    backgroundVideo: {
        width: '100%',
        height: '100%',
    },
    video: {
        width: '100%',
        height: 200, // Adjust the height as needed
      },
});
