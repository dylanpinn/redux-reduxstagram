// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import type { State, Dispatch } from '../types';

// eslint-disable-next-line arrow-parens
const mapStateToProps = (state: State) => ({
  posts: state.posts,
  comments: state.comments,
});

// eslint-disable-next-line arrow-parens
const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
