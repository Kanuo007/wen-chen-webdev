/**
 * Created by wenchen on 11/14/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    var WidgetSchema = mongoose.Schema({
        "pageId": { type : String, required: true},
        "widgetType": { type: String, enum:['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']},
        "name": String,
        "text": String,
        "placeholder": String,
        "description": String,
        "url": String,
        "width": String,
        "height": String,
        "rows": Number,
        "size": Number,
        "class": String,
        "icon": String,
        "deletable": Boolean,
        "formatted": Boolean,
        "dateCreated": { type: Date, default: Date.now }
    }, {collection: "Widget"});
    return WidgetSchema;
};