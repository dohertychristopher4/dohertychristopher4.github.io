<script>
  import { cvData } from '$lib/stores.js';
</script>


<div class="card-container">
  <h1>Projects</h1>
  {#each $cvData.projects as project}
    <div class="card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {#if project.technologiesUsed}
        <p class="tech-used">Technologies Used: {project.technologiesUsed.join(', ')}</p>
      {/if}
    </div>
  {/each}
</div>