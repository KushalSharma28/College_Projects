import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const BinLocatorScreen = ({ bins }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.5074,
          longitude: -0.1278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {bins.map(bin => (
          <Marker
            key={bin.id}
            coordinate={{ latitude: bin.lat, longitude: bin.lng }}
            pinColor={getPinColor(bin.status)}
          />
        ))}
      </MapView>
      
      <View style={styles.legend}>
        <LegendItem color="#4CAF50" text="Empty" />
        <LegendItem color="#FFC107" text="Medium" />
        <LegendItem color="#F44336" text="Full" />
      </View>
    </View>
  );
};