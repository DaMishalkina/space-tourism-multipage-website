<script lang="ts">
    import type {NavItemType} from "./types";
    import {base} from "$app/paths";

    export let navItem: NavItemType, index: number;

</script>

<li class="navigation-item">
    <a class="navigation-item__link" href={base + navItem}>
        <span class="navigation-item__index">0{index}</span>
        {navItem}
    </a>
</li>

<style>
    .navigation-item__link {
        text-transform: uppercase;
        font-size: 16px;
    }
    .navigation-item__index {
        font-weight: bold;
        margin-right: 12px;
    }
</style>