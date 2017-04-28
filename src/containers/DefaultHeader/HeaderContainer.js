import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DefaultHeader from '../../components/DefaultHeader';

const mapActionCreators = {
  
};

const mapStateToProps = (state) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapActionCreators)(DefaultHeader));

