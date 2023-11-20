import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';




export const BMI = () => {

        const [weight, setWeight] = useState('0');
        const [height,setHeight] = useState('0');
        const [bmi, setBmi] = useState(0);

    const compute = (w, h) =>{
      console.log('On pressed!');
      let weight = parseFloat(w);
      let height = parseFloat(h);
      setBmi(weight / Math.pow(height/100, 2));
    };

  return (
      <View style={styles.container}>
        <View style={styles.group}>
            <Text style={styles.title}>Weight (Kg)</Text>
            <TextInput style={styles.input} 
              keyboardType='numeric' 
              value={weight}
              onChangeText={(w) => setWeight(w)}
            />
        </View>
        <View style={styles.group}>
            <Text style={styles.title}>Height (Cm)</Text>
            <TextInput style={styles.input} 
              keyboardType='numeric'
              value={height}
              onChangeText={(h) => setHeight(h)}
            />
        </View>
      <View style={styles.center}>
        <View style={styles.group}>
            <Text style={styles.title}>BMI:{bmi.toFixed(2)}</Text>
        </View>
        <View style={styles.group}>
            <TouchableOpacity style={styles.button}
                onPress={() => compute(weight, height)}>
                <Text style={styles.buttonText}>Compute</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'column',
    padding:20
  },
  group:{
    marginTop:20
  },
  title:{
    fontSize:20
  },
  input:{
    padding:10,
    height:40,
    borderWidth:1
  },
  center:{
    alignItems:'center'
  },
  button:{
    backgroundColor:'lightblue',
    borderWidth:1,
    padding:20
  },
  buttonText:{
    fontSize:30
  }
});
export default BMI;