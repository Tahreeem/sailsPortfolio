module.exports = {


  friendlyName: 'View contact me',


  description: 'Display "Contact me" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contact-me/contact-me'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutContactMe', ejsLocalVariable: 'value' });

  }


};
