<script lang="ts">
    import type {MouseEventHandler} from "svelte/elements";

    export let title = "Button", onClick: MouseEventHandler<HTMLButtonElement> | null | undefined = undefined;
</script>

<button on:click={onClick} class="button--explore">
    <span>{title}</span>
</button>

<style>
    .button--explore {
        font-family: "Bellefair", serif;
        font-size: 20px;
        color: var(--bg-color);
        background: var(--title-color);
        border: none;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
        transition: all .4s;
    }

    .button--explore:hover {
        box-shadow: var(--hover-color) 0 5px 0 48px;
    }
    
    @media (min-width: 768px) {
        .button--explore {
            width: 242px;
            height: 242px;
            font-size: 32px;
        }
        .button--explore:hover {
            box-shadow: var(--hover-color) 0 5px 0 78px;
        }
    }

    @media (min-width: 1440px) {
        .button--explore {
            width: 274px;
            height: 274px;
        }
        .button--explore:hover {
            box-shadow: var(--hover-color) 0 5px 0 88px;
        }
    }
</style>