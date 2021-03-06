/**
* Share.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'share_c',
  attributes: {
    sharedBy: {model: 'user', required: true},
    sharedTo: {
      type: 'array',
      required: true,
      defaultsTo: []
    },
    advertisement_c: {
      type: 'string',
      required: true
    }
  }
};
