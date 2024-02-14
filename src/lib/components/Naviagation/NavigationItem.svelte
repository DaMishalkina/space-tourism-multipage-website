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
        letter-spacing: 2.7px;
    }
    .navigation-item__link:hover {
        color: var(--text-color);
    }
    .navigation-item__index {
        font-weight: bold;
        margin-right: 12px;
    }
    @media (min-width: 768px) {
        .navigation-item {

        }
        .navigation-item__link {
            font-size: 14px;
            letter-spacing: 2.36px;
        }
        .navigation-item__link:hover {
            margin-bottom: -39px;
            padding-bottom: 36px;
            color: var(--title-color);
            border-bottom: solid 3px var(--title-color);
        }
        .navigation-item__index {
            display: none;
        }

    }
</style>