import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const App = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const Calcular = () => { 
    const valorAlcool = parseFloat(alcool);
    const valorGasolina = parseFloat(gasolina);
    if (valorAlcool / valorGasolina >= 0.7) {
      setResultado('Abasteça com Gasolina!');
    }
    else {
      setResultado('Abasteça com Álcool!');
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <Text style={{ fontSize: 40, color: '#fff', textAlign: center, }}>Alcool ou Gasolina</Text>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: center, }}>Saiba qual a melhor opção para abastecer seu veiculo</Text>
        <TextInput onChangeText={(value) => setGasolina(value)} placeholder='Valor da Gasolina' keyboardType='numeric' style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} />
        <TextInput onChangeText={(value) => setAlcool(value)} placeholder='Valor da Alcool' keyboardType='numeric' style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} />
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10 }}>
          <Text style={{ fontSize: 20 }}>Calcular!</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: center, }}>{resultado}</Text>
        </ImageBackground>
    </View>
  );
}