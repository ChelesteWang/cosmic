<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Ripple from 'smelte/src/components/Ripple';

  import { ClassBuilder } from 'smelte/src/utils/classes.js';
  const dispatch = createEventDispatcher();
  const classesDefault = `inline-flex items-center mb-2 cursor-pointer z-10`;
  const trackClassesDefault = 'relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center';
  const thumbClassesDefault = 'rounded-full p-2 w-5 h-5 absolute shadow duration-100';
  const labelClassesDefault = 'pl-2 cursor-pointer';

  export let value = false;
  export let label = '';
  export let color = 'primary';
  export let disabled = false;
  export let trackClasses = trackClassesDefault;
  export let thumbClasses = thumbClassesDefault;
  export let labelClasses = labelClassesDefault;

  export let classes = classesDefault;

  const cb = new ClassBuilder(classes, classesDefault);
  const trcb = new ClassBuilder(trackClasses, trackClassesDefault);
  const thcb = new ClassBuilder(thumbClasses, thumbClassesDefault);
  const lcb = new ClassBuilder(labelClasses, labelClassesDefault);

  $: c = cb.flush().add(classes, true, classesDefault).add($$props.class).get();
  $: tr = trcb
    .flush()
    .add('bg-gray-700', !value)
    .add(`bg-${color}-200`, value)
    .add(trackClasses, true, trackClassesDefault)
    .get();
  $: th = thcb
    .flush()
    .add(thumbClasses, true, thumbClassesDefault)
    .add('bg-white left-0', !value)
    .add(`bg-${color}-400`, value)
    .get();
  $: l = lcb
    .flush()
    .add(labelClasses, true, labelClassesDefault)
    .add('dark:text-gray-200', true)
    .add('text-gray-500', disabled)
    .add('text-gray-700', !disabled)
    .get();

  function check() {
    if (disabled) return;

    value = !value;
    dispatch('valueChange', { value });
  }
</script>

<div class="{c}" on:click="{check}">
  <input bind:value class="hidden" type="checkbox" on:change />
  <div class="{tr}">
    <div class="w-full h-full absolute"></div>
    <Ripple color="{value && !disabled ? color : 'gray'}" noHover>
      <div class="{th}" style="{value ? 'left: 1.25rem' : ''}"></div>
    </Ripple>
  </div>
  <label aria-hidden="true" class="{l}">
    {label}
  </label>
</div>
