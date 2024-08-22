<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="spacebar">
  <h1>Skills</h1>
  <ul class="spacebar-set">
    {#each $cvData.skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>
