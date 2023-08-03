import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native'

export default function Login() {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Image
        style={{ width: width, height: width }}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/ce80/eaab/b7887fc548f9122fb61e018f8ed6ecc8?Expires=1691971200&Signature=KS~j7Bn0rOLApmUPe4iGjaVuWKr4ZaZtvKln4B8GlSz4Ig-ZvFSwF5k5Sl7XPRxl0dgqm~bEy-UpHbBVKpa1srwxJE4FCL8UQMrY7DiLRDMQTewQrx7eB-GEoLQpyEnjGBs3Cs5IPLm~1jOnWqF4AYH-HrSWj-9gCX3Xcqq959FTMZ1fBOlqxRbpfhQakqNE-6~RVKj0m-pCNzg0~EHzCtLl2zQRGua~so6nx-5gDSumJMa0gP1UNdj2aw7UnXnt0CXuUzoGm48tC8dvnKAfa13RBdX33IK3V~NgArHXaJ-0nk~P3NJZ41unGaaiCzz0EJHWKHy2XibYXrUOOb~FlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        }}
      />
      <Text style={styles.title}> Login Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
