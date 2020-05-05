<script>
    import IconLink from "./IconLink.svelte";
    export let horizontal = true;
</script>

<style>
    div {
        display: flex;
        vertical-align: middle;
    }

    .h {
        flex-flow: row;
    }

    .v {
        flex-flow: column;
    }
</style>

<div class={horizontal ? 'h' : 'v'}>
    <slot></slot>
    <IconLink href='https://github.com/bketelsen' icon='github'></IconLink>
    <IconLink href='https://twitter.com/bketelsen' icon='twitter'></IconLink>
    <IconLink href='https://youtube.com/bketelsen' icon='youtube'></IconLink>
</div>
