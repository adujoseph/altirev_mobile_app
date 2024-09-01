import { StyleSheet, Text, View, FlatList, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import Header from './_components/HeaderSection'
import HeaderSection from './_components/HeaderSection'
import ProfileSection from './_components/ProfileSection'
import ResultItem from './_components/ResultItem'
import { demo_data } from './_components/DemoData'
import EmptyComponent from './EmptyComponent'
import ListHeader from './_components/ListHeader'

const {height, width} =  Dimensions.get('window')

const AgentDashboard = () => {
    const ItemSeparatorComponent = () => <View style={styles.separator} />;
    return (
        <View style={{ flexGrow: 1 }}>
            <HeaderSection />
            <ProfileSection />
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
                        ListHeaderComponent={<ListHeader />}
                        ListHeaderComponentStyle={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 10 }}

                    />
                </View>
            </View>
        </View>
    )
}

export default AgentDashboard

const styles = StyleSheet.create({
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