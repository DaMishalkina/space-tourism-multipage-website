<script lang="ts">
    import type {NavItemType} from "./types";
    import {base} from "$app/paths";
    import { page } from "$app/stores";
    export let navItem: NavItemType, index: number;

</script>

<li class="navigation-item">
    <a
            class="navigation-item__link"
            class:active={$page.url.pathname === "/" + Object.values(navItem)[0]}
            href={base + `/${Object.values(navItem)[0]}`}
    >
        <span class="navigation-item__index">0{index}</span>
        {Object.keys(navItem)[0]}
    </a>
</li>

<style>
    .navigation-item__link {
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 2.7px;
        display: flex;
        gap: 12px;

    }
    .navigation-item__link:hover {
        color: var(--text-color);
    }
    .navigation-item__index {
        font-weight: bold;
    }
    @media (min-width: 768px) {
        .navigation-item__link {
            font-size: 14px;
            padding-bottom: 36px;
            letter-spacing: 2.36px;
            margin-bottom: -39px;
            border-bottom: solid 3px transparent;
        }
        .navigation-item__link.active, .navigation-item__link:active {
            border-bottom: solid 3px var(--title-color);
        }
        .navigation-item__link:hover {
            color: var(--title-color);
            border-bottom: solid 3px rgba(255, 255, 255, 0.5);
        }
        .navigation-item__index {
            display: none;
        }

    }
    @media (min-width: 1440px) {
        .navigation-item__link {
            font-size: 16px;
        }
        .navigation-item__index {
            display: block;
        }
    }
</style>