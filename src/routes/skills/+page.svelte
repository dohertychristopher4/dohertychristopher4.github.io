<script>
  import { cvData } from '$lib/stores.js';
</script>

<style>
  .skills {
    font-family: 'Arial', sans-serif;
    color: #333;
  }

  .skill-set {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style-type: none;
  }

  .skill-set li {
    background-color: #eee;
    padding: 0.5em 1em;
    font-size: 1em;
    border-radius: 0.3rem;
  }
</style>

<div class="skills">
  <h1>Skills</h1>
  <ul class="skill-set">
    {#each $cvData.skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>
