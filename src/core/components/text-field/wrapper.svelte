<script>
  import utils, { ClassBuilder, filterProps } from 'smelte/src/utils/classes';

  let classesDefault = 'mt-2 mb-15 relative text-gray-600';

  export let error = false;
  export let select = false;
  export let autocomplete = false;

  export let add = '';
  export let remove = '';
  export let replace = '';

  const l = new ClassBuilder($$props.class, classesDefault);

  let Classes = (i) => i;

  $: classes = l
    .flush()
    .add('select', select || autocomplete)
    .replace({ 'text-gray-600': 'text-error-500' }, error)
    .add(add)
    .replace(replace)
    .remove(remove)
    .get();

  const props = filterProps(['error', 'hint', 'select', 'autocomplete'], $$props);
</script>

<div class="{classes}">
  <slot />
</div>
