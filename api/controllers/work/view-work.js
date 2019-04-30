module.exports = {


  friendlyName: 'View work',


  description: 'Display "Work" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/work/work'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutWork', ejsLocalVariable: 'value' });

  }


};
