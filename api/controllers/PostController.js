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
    }

};

