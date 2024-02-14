<script lang="ts">
    import NavigationItem from "./NavigationItem.svelte";
    import type {NavType} from "./types";
    export let navItems: NavType;
</script>

<ul class="navigation-list">
    {#each navItems as navItem, i (i)}
        <NavigationItem
                navItem={navItem}
                index={i}
        />
    {/each}
</ul>

<style>
    .navigation-list {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    @media (min-width: 768px) {
        .navigation-list {
            gap: 37px;
            flex-direction: row;
        }

    }
</style>