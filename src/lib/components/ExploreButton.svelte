<script lang="ts">
    export let title = "Button", onClick: void | undefined = undefined;
</script>

<button on:click={onClick} class="button--explore">
    <span>{title}</span>
</button>

<style>
    .button--explore {
        font-family: "Bellefair", serif;
        font-size: 20px;
        color: var(--bg-color);
        border: none;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
    }
    
    @media (min-width: 768px) {
        
    }

    @media (min-width: 1440px) {

    }
</style>