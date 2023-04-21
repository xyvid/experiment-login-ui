<script>
  
let usersVal = {};

import { onMount } from 'svelte';
  import  {session} from '../../../stores/sessionStore';
  import  {users, loadUsers} from '../../../stores/usersStore';
  import { dialogs } from "svelte-dialogs";



  async function onSubmit(e) {
  const formData = new FormData(e.target);

 

  
    dialogs.alert('Submit Placeholder');

 };
	
</script>
<h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"><a href="../users/"> Back</a></h1>

<h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">User Editor </h1>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

  <form>
  <div class="py-4 grid gap-4 md:grid-col-3 grid-cols-3">
  <div>
    <h3>First Name</h3>
    <input  required type="input" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
  <div>
      <h3>Last Name</h3>
      <input required  type="input" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
  </div>
  <div>
      <h3>Username</h3>
      <input required type="input" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
  <div>
      <h3>Password</h3>
      <input required    type="password" class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>  




      <button type="button" on:submit|preventDefault={onSubmit} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New User</button>
    </form>
  </div>

