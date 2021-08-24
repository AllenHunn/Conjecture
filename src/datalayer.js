const StormDB = require('stormdb');

const engine = new StormDB.localFileEngine('./public/db.json');
const db = new StormDB(engine);
const entries = 'entries';

db.default({ entries: [] });

const createDataObject = (seed, maxAttained, numOfSteps, isEven) => {
    return { seed, maxAttained, numOfSteps, isEven };
};

const addEntry = (dto) => {
    db
    .get(entries)
    .push(dto)
    .save();
}

const getAllEntries = () => {
    return db.get(entries);
}

module.exports = {
    createDataObject, 
    addEntry,
    getAllEntries
};