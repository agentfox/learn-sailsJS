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
    getOne : async (req,res) => { // dung try catch
        //Post.find( {where :{ userId : req.param('id') } , limit: 1, skip: 1, sort: []  } ) // 
        
        try {
            let post = await Post.findOne({ title : req.param('title') } ) 
            if(!post || post === {}) {
                return res.send({ 
                    'success' : false,
                    'message' : 'No record found'
                })
            }
            return res.send({
                'success' : true,
                'message' : 'Record fetched',
                'data'     : post
            })
        } catch(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        }
        /*
        let post = await Post.findOne({ title : req.param('id') } ) 
        .then(function(post){
            
        })
        .catch(function(err) {
            
        })
        */
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
    
    
    update : async (req,res) => {

        try {
            console.log(req.param('id'));
            await Post.update( {id:req.param('id')} )
            .set({
                userId : req.param('userId') ,
                title : req.param('title') ,
                completed : req.param('completed') ,

            });
            return res.ok();
        }
        catch(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        }
    },

    delete : async (req,res) => {

        try {
            console.log(req.param('id'));
            await Post.destroy( {id:req.param('id')} )
            return res.ok();
        }
        catch(err) {
            sails.log.debug(err);
            return res.send({
                'success' : false,
                'message' : 'unable to connect'
            })
        }
    }


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

