import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../redux/slices/navSlice'

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw` top-2 left-0 p-0 `}>
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-1 text-xl`}>Selecione uma corrida - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
          style={tw`flex-row justify-between items-center px-10 ${id === selected.id && 'bg-gray-200'}`}
          onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 75,
                height: 75,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Chega em: {travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>

              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(

                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 100)

              )}

            </Text>
          </TouchableOpacity>
        )}
      />
      
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
        disabled={!selected}
        style={tw`bg-black ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Escolha {selected.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})