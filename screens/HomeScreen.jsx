// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import { APP } from '../consts/app';
import CardItem from '../components/ui/CardItem';
import TrendingData from '../consts/data';

const HomeScreen = ({ navigation }) => {
  return (
    // <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide}>
            <Image source={APP.CAROUSEL.IMG1} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={APP.CAROUSEL.IMG2} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={APP.CAROUSEL.IMG3} style={styles.image} />
          </View>
        </Swiper>
        {/* <View style={styles.container}>
          <View>
            <Text style={styles.title}>Explore</Text>
          </View>
          <View>
            <Text style={styles.title}>Explore</Text>
            <Text style={styles.paragraph}>In React Native, you don't use HTML and CSS directly as you would in web development. Instead, you use a subset of styling properties provided by React Native. React Native does not have a direct equivalent to HTML or CSS classes, and it doesn't interpret Bootstrap's CSS directly.</Text>
          </View>
        </View> */}

      <FlatList
        data={TrendingData}
        renderItem={CardItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
         // contentContainerStyle={styles.listContainer}
      />
      </ScrollView>
    // </View> 
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding: 4,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 9,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    // fontWeight: 400,
    marginBottom: 8,
  },
  paragraph :{
    fontSize: 12,
    // fontWeight: 100,
    marginBottom: 8,
  },
  btn:{
    margin: 5,
  },
  // listContainer:{
  //   paddingHorizontal: 10,
  //   paddingTop: 10,
  // },
});






