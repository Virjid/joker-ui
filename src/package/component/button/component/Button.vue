<template>
<button class="jk-btn"
:disabled="disabled"
:style="styles"
:class="className"
@click="clickButton($event)">
    <jk-icon v-if="loading" loading :type="icon?icon:'rotate-cw'" />
    <jk-icon v-else-if="icon" :type="icon" />
    <slot></slot>
</button>
</template>


<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: undefined
        },
        size: {
            type: String,
            default: 'default'
        },
        long: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'default'
        }
    },
    data() {
        return {

        };
    },
    methods: {
        clickButton(event) {
            this.$emit('click', event);
        }
    },
    computed: {
        className() {
            
            let className = {
                'jk-btn-loading': this.loading,
                'jk-btn-icon-only': !this.$slots.default || this.$slots.default.length === 0,
            };

            className[`jk-btn-${this.type}`] = true;
            className[`jk-btn-${this.size}`] = true;
            className[`jk-btn-${this.shape}`] = true;
            
            return className;
        },
        styles() {
            let styles = {};
            if (this.long) {
                styles['width'] = '100%';
            }
            return styles;
        }
    }
};
</script>