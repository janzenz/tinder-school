import colors from '../colorsPalette';

/*
 *  Overrides default material-ui theme
 *
 */
export default {
  'spacing': {
    'iconSize': '16px'
  },

  'appBar': {
    'height': 64,
    'loggedOutHeight': 200,
    'textColor': colors.white,
    'padding': '14px'
  },

  'floatingActionButton': {
    'iconColor': colors.white
  },

  'fontFamily': 'karla-regular',

  'drawer': {
    'width': 400,
    'color': colors.merino
  },

  'raisedButton': {
    'fontSize': '16px',
    'fontWeight': 'bold',
    'textColor': colors.oldLavender,
    'primaryTextColor': colors.white,
    'secondaryColor': colors.swirl,
    'secondaryTextColor': colors.white
  },

  'chip': {
    'deleteIconColor': colors.white
  },

  'snackbar': {
    'textColor': colors.white,
    'backgroundColor': colors.tobaccoBrown
  },

  'palette': {
    'primary1Color': colors.oldLavender
  }
};
