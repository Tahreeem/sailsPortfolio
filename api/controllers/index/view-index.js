module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/index/index'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutIndex', ejsLocalVariable: 'value' });

  }


};
