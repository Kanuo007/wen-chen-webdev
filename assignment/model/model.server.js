/**
 * Created by wenchen on 11/14/16.
 */
module.exports = function() {
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost/wam-fall-2016');
    // mongoose.connect('mongodb://kanuo_007:Biaji007@ds033076.mlab.com:33076/webproject01');


    var userModel = require("./user/user.model.server")();
    var websiteModel = require("./website/website.model.server")();
    var pageModel = require("./page/page.model.server")();
    var widgetModel = require("./widget/widget.model.server")();


    var model = {
        userModel: userModel,
        websiteModel: websiteModel,
        pageModel: pageModel,
        widgetModel: widgetModel
    };

    return model;
 };