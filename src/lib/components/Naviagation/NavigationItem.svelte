<script lang="ts">
    import type {NavItemType} from "./types";
    import {base} from "$app/paths";

    export let navItem: NavItemType, index: number;

</script>

<li>
    <a href={base + navItem}>
        <span>0{index}</span>
        {navItem}
    </a>
</li>