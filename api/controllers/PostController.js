/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get : function(req,res) {
        Post.find()
        .then(function(posts){
            if(!posts || posts.length === 0) {
                return res.send({
                    'success' : false,
                    'message' : 'No record found'
                })
            }
            return res.send({
                'success' : true,
                'message' : 'Record fetched',
                'data'     : posts
            })
        })
        .catch(function(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        })
    },

    create : function(req,res) {
        Post.create(req.allParams())
        .then(function(post){
            console.log('created new post');
            return res.send({
                'success' : true,
                'message' : 'Record created'
            })
        })
        .catch(function(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        })
    },

    update : function(req,res) {
        req.log.debug(req.param('id'));
        Post.update(req.param('id'),req.allParams())
        .then(function(post){
            console.log('updated the post');
            return res.send({
                'success' : true,
                'message' : 'Updated'
            })
        })
        .catch(function(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        })
    },
    // delete: function(req, res){
    //     Champ.destroy(req.param('id'))
    //       .then(function(champ){
    //         return res.send({
    //           'success': true,
    //           'message': 'Record deleted successfully',
    //           'data': champ
    //         })
    //       })
    
    //       .catch(function(err){
    //         sails.log.debug(err)
    //         return res.send({
    //           'success': false,
    //           'message': 'Unable to delete record'
    //         })
    //       })
    //   }

};

