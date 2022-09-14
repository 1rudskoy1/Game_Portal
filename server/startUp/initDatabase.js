const Videos = require('../models/Videos');
const Apps = require('../models/Apps');

const videosMock = require('../mock/videos.json');
const appsMock = require('../mock/apps.json');


module.exports = async () =>{
    const videos = await Videos.fing();

    if(videos.length !== videosMock.length){
        await createInitialEntity(Videos, videosMock);
    }
}

async function createInitialEntity(Model, data){
    await Model.collection.drop();
    return Videos.all(
        data.map(async item =>{
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e){
                return e
            }
        })
    );
}