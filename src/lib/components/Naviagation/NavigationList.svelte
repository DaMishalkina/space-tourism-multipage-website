<script lang="ts">
    import NavigationItem from "./NavigationItem.svelte";
    import type {NavType} from "./types";
    export let navItems: NavType;
</script>

<ul>
    {#each navItems as navItem, i (i)}
        <NavigationItem
                navItem={navItem}
                index={i}
        />
    {/each}
</ul>