import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default DetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Image
            style={styles.image}
            source={ product.image }
            resizeMode="cover"
          />
        </View>
        <View style={styles.col}>
          <View style={styles.small}>
            <Text style={product.quantity === 0 ? styles.outOfStore : styles.inStore}>
              {product.quantity === 0 ? 'Out of Store' : `${product.quantity} in Store`}
            </Text>
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.price}>
            <Text style={styles.discountPrice}>${product.discount_price}</Text>
            <Text>${product.price}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity style={styles.button}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    col: {
      flex: 1,
      paddingHorizontal: 5,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    small: {
      marginBottom: 10,
    },
    outOfStore: {
      backgroundColor: 'red',
      color: 'white',
      padding: 5,
      borderRadius: 5,
    },
    inStore: {
      backgroundColor: 'green',
      color: 'white',
      padding: 5,
      borderRadius: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    price: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    discountPrice: {
      textDecorationLine: 'line-through',
      marginRight: 5,
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
    },
    buttonGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    quantity: {
      paddingHorizontal: 10,
    },
    addToCartButton: {
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginLeft: 10,
    },
    addToCartText: {
      color: 'white',
      fontWeight: 400,
    },
  });


