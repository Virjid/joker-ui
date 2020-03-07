import Icon from './src/package/component/icon';
import Button from './src/package/component/button';

const components = [
    Icon, Button
];


// ------------------------------------------------------
// install globally
// ------------------------------------------------------
const install = function (Vue) {
    // components.map(com => Vue.use(com));
    for (let i = 0, size = components.length; i < size; i++) {
        let com = components[i];
        Vue.use(com);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};