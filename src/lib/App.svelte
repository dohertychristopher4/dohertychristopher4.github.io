<script>
  import { cvData } from '$lib/stores.js';
  import { page } from '$app/stores';
  import Personal from '../routes/personal/+page.svelte';
  import About from '../routes/+page.svelte';
  import Education from '../routes/education/+page.svelte';
  import Experience from '../routes/experience/+page.svelte';
  import Skills from '../routes/skills/+page.svelte';
  import Projects from '../routes/projects/+page.svelte';
  import Contact from '../routes/contact/+page.svelte';

  let routes = ['education', 'experience', 'skills', 'projects', 'contact'];

  let activeComponent = null;

  $: route = $page.url.pathname;
  $: {
    if (route.startsWith('/education')) {
      activeComponent = Education;
    } else if (route.startsWith('/experience')) {
      activeComponent = Experience;
    } else if (route.startsWith('/skills')) {
      activeComponent = Skills;
    } else if (route.startsWith('/projects')) {
      activeComponent = Projects;
    }  else if (route.startsWith('/contact')) {
      activeComponent = Contact;
    } else {
      activeComponent = About;
    }
  }
</script>

<div class="app">
  <nav class="sidebar-nav">
    <!-- 👤 🎓 💼 💡 📁 -->
    <a href='/' class="nav-link">
      <img src="svgs/about.svg" alt='about'/>
    </a>
    {#each routes as route}
    <a href={route} class="nav-link">
      <img src="svgs/{route}.svg" alt={route}/>
    </a>
    {/each}
  </nav>
  <div>
    {#if $cvData}
      <Personal {$cvData} />
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
  <div class="main-content">
    {#if $cvData}
      <svelte:component this={activeComponent} {cvData} />
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</div>

<style>

</style>