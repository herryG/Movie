import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { FAB } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
  {
    id: '1',
    image: require('../../assets/images/image1.png'),
    title: 'A New Generation',
    subtitle: 'If it keeps up, man will atrophy all \nhis limbs but the push-button finger.',
  },
  {
    id: '2',
    image: require('../../assets/images/image2.png'),
    title: 'Easy Explore',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../../assets/images/image3.png'),
    title: 'Watch "Ad-Free"',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    image: require('../../assets/images/image4.png'),
    title: 'Cinema Experience',
    subtitle: 'We bring the Cinema \nto You',
  },
  {
    id: '5',
    image: require('../../assets/images/image5p.png'),
    title: "Let's Get Started.",
    subtitle: '',
    // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={item?.image}
        style={{ height: '75%', width, resizeMode: 'contain' }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const nextIcon = () => {
    return (
      <MaterialCommunityIcons
        name="pac-man"
        color={'black'}
        size={24}
      />
    );
  }
  const atEndIcon = () => {
    return (
      <MaterialCommunityIcons
        name="label-variant"
        color={'black'}
        size={24}
      />
    );
  }

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: 'white',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              {/* <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('Home')}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                  EXPLORE MOVIES NOW
                </Text>
              </TouchableOpacity> */}
              <FAB
                style={styles.fab}
                large
                icon={atEndIcon}
                onPress={() => navigation.replace('Email')}
              // onPress={() => console.log('Pressed')}
              // onPress={goToNextSlide}
              />
            </View>
          )
            : (
              <View style={{ flexDirection: 'row' }}>
                {/* <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.btn,
                    {
                      borderColor: 'orange',
                      borderWidth: 1,
                      backgroundColor: 'transparent',
                    },
                  ]}
                  onPress={skip}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: COLORS.white,
                    }}>
                    SKIP
                  </Text>
                </TouchableOpacity> */}
                <View style={{ width: 15 }} />
                {/* <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={styles.btn}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    NEXT
                  </Text>
                </TouchableOpacity> */}
                <FAB
                  style={styles.fab}
                  large
                  icon={nextIcon}
                  // onPress={() => console.log('Pressed')}
                  onPress={goToNextSlide}
                />
              </View>
            )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default OnboardingScreen;
