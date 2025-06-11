const redis = require('redis');
const client = redis.createClient();

// Cache bin status with 5 minute TTL
const getBinsWithCache = async () => {
  const cacheKey = 'all_bins_status';
  
  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) return JSON.parse(cachedData);
    
    const bins = await BinModel.find().lean();
    await client.setEx(cacheKey, 300, JSON.stringify(bins)); // 5 min cache
    
    return bins;
  } catch (error) {
    console.error('Cache error:', error);
    return await BinModel.find().lean(); // Fallback to DB
  }
};

// Invalidate cache on bin update
const updateBin = async (binId, updateData) => {
  await BinModel.updateOne({ _id: binId }, updateData);
  await client.del('all_bins_status'); // Clear cache
};