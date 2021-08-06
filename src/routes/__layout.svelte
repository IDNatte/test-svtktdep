<script>
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Navbar />

<main class="p-6 pt-32 relative">
  <slot />
</main>

<Footer />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

</style>