<template>
    <div id="icon-view">
        <div class="icon-view-item" 
            v-for="(item, index) in icons" 
            :key="index" 
            :data-clipboard-text="copyValue" @click="copy(item.font_class)">

            <jk-icon :type="item.font_class" />
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import icons from './assets/iconfont.json';
import ClipboardJS from 'clipboard';

export default {
    data() {
        return {
            icons: icons.glyphs,
            copyValue: ''
        };
    },
    mounted() {
        this.clipboard = new ClipboardJS('.icon-view-item');
    },
    beforeDestroy() {
        this.clipboard.destroy();
    },
    methods: {
        copy(font_class) {
            this.copyValue = `<jk-icon type="${font_class}" />`;
            alert('代码复制成功');
        }
    }
};
</script>

<style lang="scss" scoped>

.icon-view-item {
    float: left;
    margin: 12px 0;
    width: 80px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #5c6b77;
    transition: all .2s ease;
    position: relative;
    padding-top: 10px;
}

.icon-view-item p {
    margin: 0;
    word-break: break-all;
}

.icon-view-item {
    span.jk-icon {
        font-size: 25px;
        transition: font-size .3s;
        &:hover {
            font-size: 50px;
        }
    }

    p {
        font-size: 10px;
    }
}
</style>