import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8; // 80% of screen width
const ITEM_HEIGHT = 200;

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const Carousel = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView horizontal={true} contentContinaerStyle={{flexGrow: 1}}>
        {/* <View style={styles.container}> */}
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH}
            snapToAlignment="center"
            decelerationRate="fast"
        />
        {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Carousel;
