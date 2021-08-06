<script context="module">
  export function load ({error, status}) {
    return {
      props: {
        status: status,
        error: error.message
      }
    }
  }
</script>

<script>
  export let status
  export let error
</script>

<svelte:head>
  <title>Skeleton Project | Error { status }</title>
  <meta name="description" content="Skeleton Project to the new world of sveltekit">
</svelte:head>

<div class="error-wrapper block w-full h-screen">
  <div class="text-center">
    <span class="text-status">{ status }</span>
    <span class="block">
      <p class="notif">{ error }</p>
    </span>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,900;1,900&display=swap');

  .error-wrapper .text-status {
    font-size: 8rem;
    font-weight: 100;
  }

  .error-wrapper .notif {
    font-family: 'Source Code Pro', monospace;
    font-weight: 300;
    background-color: #d1d5db;
    display: inline-block;
    border-radius: 2px;
    padding: 6px 10px;
    color: #4b5563;
  }
</style>
