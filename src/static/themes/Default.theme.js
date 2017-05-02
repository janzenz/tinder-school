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
    'color': colors.acapulco,
    'textColor': colors.white,
    'padding': '14px'
  },

  'floatingActionButton': {
    'iconColor': colors.white
  },

  'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif',

  'drawer': {
    'width': 400,
    'color': colors.merino
  },

  'raisedButton': {
    'fontSize': '18px',
    'fontWeight': 'bold',
    'textColor': colors.oldLavender,
    'primaryTextColor': colors.white,
    'primaryColor': colors.acapulco,
    'secondaryColor': colors.swirl,
    'secondaryTextColor': colors.white
  },

  'flatButton': {
    'fontSize': '18px',
    'fontWeight': 'bold',
    'textColor': colors.acapulco,
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
    'primary1Color': colors.oldLavender,
    'accent1Color': colors.japonica
  }
};
