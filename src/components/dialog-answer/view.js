import { h } from 'hyperapp';
import { location } from '@hyperapp/router';
import './index.less';

import Loading from '../../elements/loading';

export default () => (global_state, global_actions) => {
  const actions = global_actions.components.dialogAnswer;
  const state = global_state.components.dialogAnswer;

  return (<div>test</div>);
};