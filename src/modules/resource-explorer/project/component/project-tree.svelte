<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { Tree } from '@cosmic/core/components';
  import type { TreeNode } from '@cosmic/core/components';
  import { ROUTES, urlFor } from '../../routes';

  export let data: TreeNode;

  const dispatch = createEventDispatcher();

  function projectNodeClickedHandler(event) {
    if (event.detail.selectedKey) {
      push(urlFor(ROUTES.PROJECT_DETAIL, { projectId: event.detail.selectedKey }));
    }
  }

  function addButtonClickedHandler(event) {
    dispatch('add-project', event.detail.clickedKey);
  }
</script>

<Tree
  data="{data}"
  extraIcon="add"
  primaryIndent="{2.2}"
  treeIcon="folder_open"
  on:click="{projectNodeClickedHandler}"
  on:click-extra="{addButtonClickedHandler}"
/>
