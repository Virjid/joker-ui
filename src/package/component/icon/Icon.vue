<template>
    <span class="jk-icon" @click="click($event)"
    :class="className"
    :style="styles">
    </span>
</template>

<script>
import $variable from '../../../theme/variable.scss';

export default {
    props: {
        custom: {
            type: String,
            default: undefined
        },
        type: {
            type: String,
            default: undefined
        },
        degree: {
            type: Number | String,
            default: 0
        },
        size: {
            type: Number | String,
            default: 'default'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click($event) {
            this.$emit('click', $event);
        }
    },
    computed: {
        className() {
            let className = {
                'jk-icon-loading': this.loading
            };

            if (!this.custom) {
                className['iconfont'] = true;
                className[`icon-${this.type}`] = true;
            } else {
                className[this.custom] = true;
            }

            return className;
        },
        styles() {
            let styles = {
                transform: `rotate(${this.degree}deg)`
            };
            switch (this.size) {
                case 'default': break;
                case 'small':   styles['font-size'] = $variable.small_icon_size;    break;
                case 'big':     styles['font-size'] = $variable.big_icon_size;      break;
                default:        styles['font-size'] = this.size;                    break;
            }

            return styles;
        }
    }
};
</script>