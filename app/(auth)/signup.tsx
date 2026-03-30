import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href={"./(auth)/signin"}>Sign in</Link>
    </View>
  )
}

export default signup