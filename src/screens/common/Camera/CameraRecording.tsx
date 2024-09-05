import React, { useState, useRef, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
import Video from 'react-native-video';
import { uploadReportFile } from '../../../services/reports';
import Authcontext from '../../../context/Authcontext';

const VideoRecorderPlayer: React.FC = () => {
   const {setVideoLink} = useContext(Authcontext)
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const cameraRef = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = useCameraDevice('back');

  const startRecording = async () => {
    if (cameraRef.current) {
      const video = await cameraRef.current.startRecording({
        onRecordingFinished: (video) => {
          setVideoUri(video.path);
          setIsRecording(false);
        },
        onRecordingError: (error) => console.error(error),
      });
      setIsRecording(true);
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      await cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  const deleteVideo = () => {
    setVideoUri(null);
  };

  const uploadVideo = async () => {
   const formData = new FormData();
   formData.append('file', {
     uri: videoUri,
     name: 'reports',
     type: 'video/mp4', 
   });
   const fileUrl = await uploadReportFile(formData)
    console.log('Uploading video:', videoUri, fileUrl);
    setVideoLink('https://')
  };

  if (device == null) return <View />;

  return (
    <View style={styles.container}>
      {!videoUri ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
          ref={cameraRef}
        />
      ) : (
        <Video
          source={{ uri: videoUri }}
          style={styles.video}
          controls={true}
          paused={!isPlaying}
          resizeMode="contain" 
          onError={(error) => console.log('Video Error:', error)}
          volume={1.0}
          playInBackground={true}
          // onPlay={() => setIsPlaying(true)}
          //onPause={() => setIsPlaying(false)}
        />
      )}

      <View style={styles.controls}>
        {!videoUri ? (
          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}
            style={[styles.recordButton, isRecording && styles.stopButton]}>
            <Text style={styles.recordButtonText}>
              {isRecording ? 'Stop' : 'Record'}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={deleteVideo} style={styles.deleteButton}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={uploadVideo} style={styles.uploadButton}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  camera: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    backgroundColor: 'blue',
  },
  recordButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  deleteButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default VideoRecorderPlayer;
