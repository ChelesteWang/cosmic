<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import SVG from 'svelte-inline-svg';
  import { onMount, onDestroy } from 'svelte';
  import { throttle, angleBetween, RectWithThrottle } from './util';
  import RingGroup from './ring-group';

  export let top: string | number = '50%';
  export let left: string | number = '50%';
  export let length = 4;
  export let title = '';

  const ringGroup = new RingGroup();
  ringGroup.setPieceLength(length);

  let startDom: HTMLElement;
  let startRect: RectWithThrottle;
  const dispatch = createEventDispatcher();
  const t = throttle((event: MouseEvent) => {
    startRect = startRect || new RectWithThrottle(startDom);
    const rect = startRect.get();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    if (Math.abs(centerX - event.clientX) < 8 && Math.abs(centerY - event.clientY) < 8) return;
    let r = angleBetween(centerX, centerY, event.clientX, event.clientY);
    startDom.style.transform = `rotate(${r}deg)`;
    if (ringGroup.update(r)) {
      dispatch('change', {
        selected: ringGroup.selected,
      });
    }
  }, 30);

  onMount(() => {
    window.addEventListener('mousemove', t);
  });
  onDestroy(() => {
    window.removeEventListener('mousemove', t);
  });
</script>

<div
  class="select-none popup-core absolute transform-gpu -mt-15 -ml-15"
  style="top:{top};left:{left};"
  bind:this="{startDom}"
>
  <!-- <div style="width:30px;height:30px;border:6px solid;border-radius: 50%;border-right-color: turquoise;"></div> -->
  <div class="only-dark-show"><SVG src="{require('./popup-ring-dark.svg')}" width="30" height="30" /></div>
  <div class="only-light-show"><SVG src="{require('./popup-ring-light.svg')}" width="30" height="30" /></div>
</div>
<div
  class="title absolute text-center select-none overflow-hidden opacity-50 w-40 -mt-16 -ml-20"
  style="top:{top};left:{left};"
>
  {title}
</div>
