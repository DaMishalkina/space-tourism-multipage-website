<script lang="ts">
    import {clickOutside} from "$lib/utils/clickOutside";
    import CloseIcon from "$lib/components/svgs/CloseIcon.svelte";
    import HamburgerIcon from "$lib/components/svgs/HamburgerIcon.svelte";
    import Logo from "$lib/assets/shared/logo.svg";

    let isMenuOpened = false;
    const toggle = () => {
        isMenuOpened = !isMenuOpened;
    }

</script>


<header class="header">
    <img
            src={Logo}
            alt="Space tourism round logo"
            class="header__logo"
    />
    <div class="header-menu header__menu" use:clickOutside={() => isMenuOpened = false}>
        <div class="header__desktop-line"></div>
        <label
               class="header-toggle header__toggle"
               class:header-toggle--hidden={isMenuOpened}
       >
           <HamburgerIcon />
           <input
                   id="toggle-header-menu"
                   class="header-toggle__input"
                   on:change|preventDefault={toggle}
                   type="checkbox"
                   bind:checked={isMenuOpened}
           />
       </label>
        <div
                class="header-menu__dropdown-container"
                class:shown={isMenuOpened}
        >
            <button
                    class="header-menu__button"
                    on:click={() => isMenuOpened = false}
            >
                <CloseIcon />
            </button>
            <slot />
        </div>

    </div>

</header>

<style>
    .header {
        padding: 24px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        align-items: center;
    }
    .header__logo {
        width: 40px;
        height: 40px;
    }
    .header__desktop-line {
        display: none;
    }
    .header-menu {
        display: flex;
    }
    .header-toggle {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--text-color);
    }
    .header-toggle:hover {
        opacity: 70%;
    }
    .header-toggle--hidden {
        display: none;
    }
    .header-toggle__input {
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    .header-menu__dropdown-container {
        display: none;
        flex-direction: column;
        padding: 34px 27px 34px 32px;
        gap: 65px;
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(10px);
        max-height: 100vh;
        width: 68%;
        z-index: 10;
    }
    .header-menu__dropdown-container.shown {
        display: flex;
    }
    .header-menu__button {
        border: none;
        background: none;
        display: flex;
        margin: 0 0 0 auto;
        color: var(--text-color);
    }
    .header-menu__button:hover {
        opacity: 70%;
    }

    @media (min-width: 768px) {
        .header {
            padding: 24px 40px;

        }
        .header__logo {
            width: 48px;
            height: 48px;
        }
        .header__toggle {
            display: none;
        }
        .header-menu {
            margin: -24px -40px;
        }
        .header-menu__dropdown-container {
            display: flex;
            width: fit-content;
            position: unset;
            backdrop-filter: unset;
            background-color: rgba(255, 255, 255, .04);
            padding: 39px 47px;

        }
        .header-menu__button {
            display: none;
        }


    }
    @media (min-width: 1440px) {
        .header {
            padding: 40px 55px;
        }

        .header__desktop-line {
            display: block;
            background: var(--hover-color);
            width: 60%;
            height: 1px;
            position: absolute;
            top: 50%;
            left: -60%;
            transform: translate(30px, 50%);
        }

        .header-menu {
            margin: 0 -55px;
            min-width: 57%;
            position: relative;
        }

        .header-menu__dropdown-container {
            width: 100%;
            align-items: center;
        }
    }
</style>