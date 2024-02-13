<script lang="ts">
    import {clickOutside} from "$lib/utils/clickOutside";
    import CloseIcon from "$lib/assets/shared/icon-close.svg";
    import HamburgerIcon from "$lib/assets/shared/icon-hamburger.svg";
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
       <label
               class="header-toggle header__toggle"
               class:header-toggle--hidden={isMenuOpened}
       >
           <img
                   src={HamburgerIcon}
                   alt="Hamburger Icon"
                   class="header__hamburger-icon"
           />
           <input
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
        max-width: 1385px;
        margin: 0 auto;
        box-sizing: border-box;
        position: relative;
    }
    .header__logo {
        width: 40px;
        height: 40px;
    }
    .header-toggle {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
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
    }
    .header-menu__dropdown-container.shown {
        display: flex;
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(10px);
        height: 100dvh;
        width: 68%;
    }

    @media (min-width: 768px) {
        .header {

        }
        .header__logo {
            width: 48px;
            height: 48px;
        }

    }
</style>