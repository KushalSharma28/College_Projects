const routeSchema = new mongoose.Schema({
  vehicleId: String,
  driverId: String,
  bins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bin' }],
  optimizedPath: {
    type: [[Number]], // Array of [lng, lat] coordinates
    required: true
  },
  estimatedDuration: Number, // in minutes
  distance: Number, // in km
  completed: { type: Boolean, default: false },
  startTime: Date,
  endTime: Date
});