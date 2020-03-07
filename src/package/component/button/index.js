import Button from './component/Button';
import ButtonGroup from './component/ButtonGroup';

import './theme/default.scss';
import './theme/size.scss';
import './theme/type.scss';
import './theme/shape.scss';

Button.install = Vue => {
    Vue.component('JkButton', Button);
    Vue.component('JkButtonGroup', ButtonGroup);
}

if (typeof window !== 'undefined' && window.Vue) {
    Button.install(window.Vue);
}

export default Button;