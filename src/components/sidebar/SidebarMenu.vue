<template>
    <div class="sidebar" :style="{width: sidebarWidth}">       
        <SidebarLink to="/" icon="home">Home</SidebarLink>
        <SidebarLink to="/about" icon="info">About</SidebarLink>
        <span class="collapse-icon" :class="{'rotate-180': collapsed}" @click="toggleSidebar">
            <fa icon="angles-left" />
    </span>
    </div>
</template>
<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import SidebarLink from './SidebarLink.vue';
export default {
    props:{},
    components:{SidebarLink},
    setup(){
        return {collapsed, toggleSidebar, sidebarWidth}
    }
}
</script>
<style>
    :root{
        --sidebar-bg-color:#00bf63;
        --sidebar-item-hover:#394D62;
        --sidebar-item-active:#2F4858;
    }
</style>
<style scoped>
    .sidebar{
        color: white;
        background-color: var(--sidebar-bg-color);
        float: left;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.3em;
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
        
    }
    .collapse-icon{
        position: absolute;
        bottom: 0;
        padding: 0.75em;

        color: rgba(255, 255, 255, 0.75);
        transition: 0.2s linear;
    }
    .rotate-180{
        transform: rotate(180deg);
        transition: 0.2s linear;
    }
</style>