// create the seeds for the db
const db = require('../config/connection');
const { Profile } = require('../models');
const seedProfile = require('./profileSeeds.json');

db.once('open', async () => {
    try {
        await Profile.deleteMany({});
        await Profile.create(seedProfile);
        
        console.log('Seeding is all finished!');
        process.exit(0)
    } catch (err) {
        throw err;
    }
});
