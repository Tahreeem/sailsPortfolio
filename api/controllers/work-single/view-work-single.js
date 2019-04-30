module.exports = {


  friendlyName: 'View work single',


  description: 'Display "Work single" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/work-single/work-single'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutWork-single', ejsLocalVariable: 'value' });

  }


};
