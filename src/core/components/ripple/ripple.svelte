<style>
  .ripple {
    position: absolute !important;
  }
</style>

<script>
  export let color = 'primary';
  export let noHover = false;
  import createRipple from './ripple';

  $: ripple = createRipple(color, true);
  $: hoverClass = `hover:bg-${color}-transLight`;
</script>

<span
  use:ripple
  class="z-40 {$$props.class} p-2 rounded-full flex items-center justify-center top-0 left-0 {noHover
    ? ''
    : hoverClass}"
>
  <slot />
</span>
