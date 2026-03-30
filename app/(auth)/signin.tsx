import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href={"./(auth)/signup"}>Sign up</Link>
    </View>
  )
}

export default signin