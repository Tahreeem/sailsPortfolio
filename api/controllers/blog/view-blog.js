module.exports = {


  friendlyName: 'View blog',


  description: 'Display "Blog" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/blog/blog'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({ layout: 'layouts/layoutBlog', ejsLocalVariable: 'value' });

  }


};
