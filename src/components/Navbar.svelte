<script>
  import logo from '../svg/logo.svg'
</script>

<nav class="navbar flex justify-between items-center fixed w-full h-auto z-50 px-4 py-3 shadow-md bg-gray-200">
  <div class="navbar-image">
    <a href="/">
      <img class="w-16" src={ logo } alt="svelte">
    </a>
  </div>
  <ul class="flex justify-center items-center text-gray-900">
    <a class="transition hover:ring-indigo-400 hover:bg-indigo-300 duration-500 ring ring-indigo-200 bg-indigo-400 block px-4 py-2 mx-2 h-auto w-full" href=".">Home</a>
    <a class="transition hover:ring-indigo-400 hover:bg-indigo-300 duration-500 ring ring-indigo-200 bg-indigo-400 block px-4 py-2 mx-2 h-auto w-full" href="/what-is-that">Error</a>
  </ul>
</nav>