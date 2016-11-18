/**
 * Created by wenchen on 11/14/16.
 */


module.exports = function() {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findALLWebsitesForUser: findALLWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;


    function createWebsite(website){
        return WebsiteModel.create(website);
    }


    function findALLWebsitesForUser(userId) {
       return WebsiteModel.find({
           developerId : userId
       })
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel.findById(websiteId);
    }


    function updateWebsite(websiteId, website){
        return WebsiteModel
            .update(
                {
                    _id: websiteId
                },
                {
                    "name" : website.name,
                    "description" : website.description,
                    "developerId": website.developerId,
                    "pages": website.pages,
                    "dateCreated": Date.now()
                }
            );
    }



    function deleteWebsite(websiteId){
        return WebsiteModel
            .remove({_id: websiteId});
    }

};
