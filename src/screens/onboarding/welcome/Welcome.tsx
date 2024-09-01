import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  ViewToken,
} from 'react-native';
import React, { useRef, useState, RefObject } from 'react';
import { data } from './_components/onboardingData';
import { login, register1, welcome } from '../../../utils/constants';
import OnboardingItem from './_components/OnboardingItem';
import CustomButton from '../../../components/CustomButton';
import OnboardingPaginator from './_components/onboradingPagination';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
 const navigation : any = useNavigation()
  const [currentIndex, setCurrentIndex] = useState<number | any>(0);

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0]?.index);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // const scrollEffect = () => {
  //   if(currentIndex < data.length - 1){
  //       slideRef?.current?.scrollToIndex({index: currentIndex + 1})
  //   } else {
  //       navigation.navigate(welcome)
  //   }
  // }

  const handleButtonPress = (arg: string) => {
    navigation.navigate(arg)
  }

  const moveNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const movePrev = () => {
    if (currentIndex && currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const RenderButtons = () => {
    if (currentIndex === 0) {
      return (
        <>
          <View>
            <CustomButton title='Next' onPress={moveNext} />
          </View>
        </>
      )
    }

    if (currentIndex === 1) {
      return (
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexGrow: 0.25 }}>
              <CustomButton title='Prev' onPress={movePrev} />
            </View>
            <View style={{ flexGrow: 0.70 }}>
              <CustomButton title='Next' onPress={moveNext} />
            </View>
          </View>
        </>
      )
    }
    if (currentIndex === 2) {
      return (
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexGrow: 0.45 }}>
              <CustomButton title='Login' inverted  onPress={() => handleButtonPress(login)} />
            </View>
            <View style={{ flexGrow: 0.45 }}>
              <CustomButton title='Get Started' onPress={() => handleButtonPress(register1)} />
            </View>


          </View>
        </>
      )
    }
  }

  return (
    <>
      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <OnboardingItem item={item} data={data} buttonPress={() => handleButtonPress} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          snapToStart
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}

        />
        <View style={{position:'absolute', bottom: 40, right: 20, left: 20}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 40 }}>
            <OnboardingPaginator data={data} scrollX={scrollX} />
          </View>
          {RenderButtons()}
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    top: '55%',
    alignSelf: 'center',
  },
});
