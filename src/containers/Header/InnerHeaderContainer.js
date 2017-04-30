import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { InnerHeader } from '../../components/Header';

const mapActionCreators = {

};

const mapStateToProps = (state) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapActionCreators)(InnerHeader));

