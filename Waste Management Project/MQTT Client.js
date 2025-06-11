const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.example.com');

// Subscribe to all bin topics
client.subscribe('bins/+/status');

// Handle incoming messages
client.on('message', (topic, message) => {
  const binId = topic.split('/')[1];
  const data = JSON.parse(message.toString());
  
  // Update database
  BinModel.updateOne(
    { deviceId: binId },
    { 
      fillLevel: data.fill_level,
      temperature: data.temperature,
      lastUpdated: new Date() 
    }
  );
  
  // Check for alerts
  if(data.fill_level > 90) {
    AlertService.createAlert(binId, 'bin_full');
  }
});