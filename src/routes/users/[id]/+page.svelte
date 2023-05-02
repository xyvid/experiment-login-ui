
<script>
 import { onMount } from 'svelte';
 import {page} from '$app/stores';
 import  {session} from '../../../stores/sessionStore';
  import  {user, loadUsers, loadUser} from '../../../stores/usersStore';


    onMount(async (ctx) => {
    let id = $page.params.id;


  
    console.log(Number(id));

    loadUser(Number(id));
  });
</script>
<h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"><a href="../users/"> Back</a></h1>

<h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">User Editor </h1>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

  
  <div class="py-4 grid gap-4 md:grid-col-3 grid-cols-3">
    <div>
    <h3>First Name</h3>
    <input  type="input" value={$user.first_name} />
</div>
<div>
    <h3>Last Name</h3>
    <input  type="input" value={$user.last_name} />
</div>
<div>
    <h3>Username</h3>
    <input  type="input" value={$user.username} />
</div>
<div>
    <h3>Password</h3>
    <input  type="input" value="****************" />
</div>  
</div>
    </div>