import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import profile from './assets/profile.png';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import three from './assets/three.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name='ios-arrow-back' size={24} color='#52575D' />
          <Ionicons name='md-more' size={24} color='#52575D' />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profileImage}>
            <Image source={profile} style={styles.image} resizeMode='center' />
          </View>
          <View style={styles.dm}>
            <MaterialIcons
              name='chat'
              size={18}
              color='#DFD8C8'
            ></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons
              name='ios-add'
              size={48}
              color='#DFD8C8'
              style={{ marginTop: 6, marginLeft: 2 }}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: '200', fontSize: 36 }]}>
            Sanjay Magar
          </Text>
          <Text style={[styles.text, { fontSize: 14, color: '#AEB5BC' }]}>
            Software Engineer
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>19</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: '#DFD8C8',
                borderLeftWidth: 1,
                borderRightWidth: 1
              }
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>268</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image source={one} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={two} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={three} style={styles.image} resizeMode='cover' />
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, color: '#DFD8CD', fontWeight: '300' }
              ]}
            >
              70
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: '#DFD8CD', textTransform: 'uppercase' }
              ]}
            >
              Media
            </Text>
          </View>
        </View>
        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: '#41444B', fontWeight: '300' }]}
              >
                Started following
                <Text style={{ fontWeight: 'bold' }}>Jake Challeache</Text> and
                <Text style={{ fontWeight: 'bold' }}> Luis Poteer</Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: '#41444B', fontWeight: '300' }]}
              >
                Started following
                <Text style={{ fontWeight: 'bold' }}> Sanjay Magar</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: '#52575D'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 16
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    overflow: 'hidden'
  },
  dm: {
    position: 'absolute',
    backgroundColor: '#41444B',
    top: 25,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    position: 'absolute',
    backgroundColor: '#34FFB9',
    height: 20,
    width: 20,
    borderRadius: 20,
    left: 12,
    bottom: 28
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  statsContainer: {
    marginTop: 32,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  statsBox: {
    alignItems: 'center',
    flex: 1
  },
  mediaImageContainer: {
    height: 180,
    width: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginTop: 32,
    marginLeft: 78,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: '#CABFAB',
    height: 12,
    width: 12,
    // padding: 4,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});
