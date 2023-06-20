import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity>
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Selecione uma corrida</Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})