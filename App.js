import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: "",
    };
  }

  getWeather = async() => {
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
    return fetch(url).then(response => response.json()).then(responsejson => {
      this.setState({weather: responsejson})
    })
    .catch(error => {console.log(error)})
  };

 componentDidMount(){
   this.getWeather();
 }

  render() {
    console.log(this.state.weather)
    if(this.state.weather){
      return <View style={styles.container}>
      <Text>{this.state.weather.main.temp}&deg;C</Text>
      </View>;
    }else 
    return <View style={styles.container}>
    <Text>Loading...</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
