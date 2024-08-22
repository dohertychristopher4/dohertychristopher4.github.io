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

  let activeLink = '/';
  function setActive(linkUrl) {
    console.log(linkUrl, activeLink)
    activeLink = linkUrl;
  }
</script>

<div class="app">
  <nav class="sidebar-nav">
    <div class="nav-link-top">
      <img src="svgs/letter-c.svg" alt='about'/>
      <img src="svgs/letter-d.svg" alt='about'/>
    </div>
    <!-- 👤 🎓 💼 💡 📁 -->
    <a href='/' class="nav-link" class:active="{activeLink === '/'}" on:click="{() => setActive('/')}">
      <img src="svgs/about.svg" alt='about'/>
    </a>
    {#each routes as route}
    <a href={route} class="nav-link" class:active="{activeLink === '/'+route}" on:click="{() => setActive('/'+route)}">
      <img src="svgs/{route}.svg" alt={route}/>
    </a>
    {/each}
    <button on:click={() => window.location.href = '/docs/cv.docx'} class="nav-link-bottom">
        <img src="svgs/download.svg" alt='download'/>
    </button>
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