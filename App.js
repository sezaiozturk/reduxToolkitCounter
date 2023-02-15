import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from './src/app/store'
import { decrement, increment } from './src/features/counterSlice/counterSlice'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const First = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Counter:{counter}</Text>
      <Button title='+' onPress={() => dispatch(increment())} />
    </View>
  )
}

const Second = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: '#e3e3e3' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Counter:{counter}</Text>
      <Button title='-' onPress={() => dispatch(decrement())} />
    </View>
  )
}