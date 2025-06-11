const binSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  address: String,
  type: { type: String, enum: ['general', 'recyclable', 'hazardous'] },
  capacity: Number,
  currentFillLevel: Number,
  temperature: Number,
  status: { type: String, enum: ['empty', 'medium', 'full', 'critical'] },
  lastCollected: Date,
  collectionFrequency: Number // in hours
});

// Geospatial index for location-based queries
binSchema.index({ location: '2dsphere' });