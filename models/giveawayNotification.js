var mongoose     = require('mongoose')
, Schema = mongoose.Schema;

var giveawayNotification = new Schema({
    user: String

},{ versionKey: false});

var GiveawayNotification = mongoose.model('GiveawayNotification', giveawayNotification);


module.exports = {GiveawayNotification};