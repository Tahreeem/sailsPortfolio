module.exports = {


  friendlyName: 'View services',


  description: 'Display "Services" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/services/services'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutServices', ejsLocalVariable: 'value' });

  }


};
