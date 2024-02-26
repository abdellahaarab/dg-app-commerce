import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const navigation = useNavigation();

export default CardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      {item.is_featured && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>New</Text>
        </View>
      )}
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.price} - <Text style={styles.discountPrice}>${item.discount_price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigateToItem(item.id)}
        // onPress={() => navigation.navigate('DetailScreen', { itemId: item.id })}
        disabled={item.quantity === 0}>
        <Text style={styles.buttonText}>
          {item.quantity === 0 ? 'View Options' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );



const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      margin: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    badgeContainer: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: 'blue',
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 5,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 400,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderRadius: 5,
    },
    cardBody: {
      marginTop: 10,
      alignItems: 'center',
    },
    title: {
      fontWeight: 400,
      fontSize: 16,
      textAlign: 'center',
    },
    price: {
      marginTop: 5,
      fontSize: 14,
      color: 'gray',
      textAlign: 'center',
    },
    discountPrice: {
      textDecorationLine: 'line-through',
    },
    button: {
      marginTop: 10,
      paddingVertical: 8,
      backgroundColor: 'black',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 400,
    },
  });