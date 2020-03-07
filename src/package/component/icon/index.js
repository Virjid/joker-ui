import Icon from './Icon';
import './assets/iconfont.css';
import './style.scss';


Icon.install = Vue => {
    Vue.component('JkIcon', Icon);
};

if (typeof window !== 'undefined' && window.Vue) {
    Icon.install(window.Vue);
}

export default Icon;