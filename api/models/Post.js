/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'posts',
  attributes: {
    userId : {
        type : 'string'
    },
    id: {
        type : 'string'
    },
    title : {
        type : 'string',
        allowNull: true
    },
    completed: {
        type : 'string',
        allowNull: true
      }

  },

};

