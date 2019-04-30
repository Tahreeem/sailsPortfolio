module.exports = {


  friendlyName: 'View about main',


  description: 'Display "About main" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/about/about-main'
    }

  },


  fn: async function (inputs,exits) {

    // Respond with view.
    return exits.success({layout: 'layouts/layoutAbout', ejsLocalVariable: 'value'});

  }


};
