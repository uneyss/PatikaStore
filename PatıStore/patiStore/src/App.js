import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import ProductCard from './Components/ProductCard'
import product_data from './product-data.json';

function App() {
  return(
    <SafeAreaView>
    <Text style={styles.headerText}>PATIKASTORE</Text>
      <FlatList numColumns
              ListHeaderComponent={() => (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TextInput   
                      placeholder="Ara..."
                      style={styles.textInput}/>
                  </ScrollView>
                )}
        numColumns={2}
        data = {product_data}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  textInput: {
    height: 50,
    width: 370,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#f5f5f5'
  },

  headerText: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default App;
