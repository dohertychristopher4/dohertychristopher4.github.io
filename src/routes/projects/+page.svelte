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
        <p class="tech-used"><span>Technologies Used: </span>
          {#each project.technologiesUsed as tech}
            <span class="spacebar-invert">{tech}</span>
          {/each}
        </p>
      {/if}
    </div>
  {/each}
</div>
<div class="spacebar">
  <h2 id="websites-header">Websites</h2>
  <ul class="spacebar-set">
  {#each $cvData.projects as project}
    {#if project.website}
      <li class="web-link"><a href={project.website}>{project.name}</a></li>
    {/if}
  {/each}
  </ul>
</div>