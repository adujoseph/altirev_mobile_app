import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import SearchBar from '../_components/SearchBar'
import ResultItem from '../../dashboard/_components/ResultItem'
import EmptyComponent from '../../dashboard/EmptyComponent'
import { demo_data } from '../../dashboard/_components/DemoData'

const {height, width} =  Dimensions.get('window')

const ResultUploadScreen = () => {
  const ItemSeparatorComponent = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <View style={styles.card}>
                    <FlatList
                        data={demo_data}
                        renderItem={({ item }) => <ResultItem item={item} />}
                        keyExtractor={item => item.id.toString()}
                        snapToStart
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<EmptyComponent />}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                       // ListHeaderComponent={<ListHeader />}
                        ListHeaderComponentStyle={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 10 }}

                    />
                </View>
            </View>
    </View>
  )
}

export default ResultUploadScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    separator: {
      height: 1,
      backgroundColor: '#ccc',
  },
  card: {
      backgroundColor:'#fff',
      borderRadius: 10,
      padding: 10,
      minHeight: height*0.5
  }
})