<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from './state';
export default {
    props: {
        to: { type: String, required: true },
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive, collapsed }
    }
}
</script>

<template >
    <div>
        <router-link :to="to" class="link" :class="{ active: isActive }">
            <transition name="fade">
                <span v-if="!collapsed">
                    <slot />
                </span>
            </transition>
        </router-link>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;

}

.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 500;
    user-select: none;
    padding: 0.4em;
    height: 1.5em;
    color: black;
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link.active {
    border-right: 2px solid var(--sidebar-item-border-right);
}

.link .icon {
    flex-shrink: 0;
    widows: 25px;
    margin-right: 10px;
}
</style>