<script>

let usersVal = {};

import { onMount } from 'svelte';
  import  {session} from '../../stores/sessionStore';
  import  {users, loadUsers} from '../../stores/usersStore';
  import { dialogs } from "svelte-dialogs";
  import {AuthFetch} from "../../lib/AuthFetch"
  import {XyvidConfirm} from "../../lib/AlertPrompt.ts"
  import {Avatar } from  '@skeletonlabs/skeleton';
  
 onMount(async () => {


    let auth = $session.token;

    console.log(auth);
const request = { method:  'get'}
  

  const res2 = await AuthFetch( request,'/Users'  );


     let usersjson =  await res2.json();

     console.log( usersjson);
     loadUsers(usersjson);
     usersVal = $users;


    
  });

  function bar(success) {

    if(success)
    {
      console.log('bar() function called Success!');
    }
    else
    {
      console.log('bar() function called Failed!');
    }
  return Math.random();
}
    
  async function  handleDelete(idtodelete) {
		
    XyvidConfirm('Confirm','Are you sure you want to delete this?', function(success){
    if(success)
    {
      $users = $users.filter(item=> item.id !== idtodelete);
    }
    }
    
    );
    
    if(await dialogs.confirm())
    {

    }
  };
    


	
</script>
<h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">User Editor</h1>
<a class="float-right"  href={`/users/add`} >
  <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New User</button>
</a>
<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

 
  <div class="py-4 grid gap-4 md:grid-col-3 grid-cols-3">
  {#if $users != ''}
    {#each $users as user}
 <div >
   
  <a class=" block card card-hover p-4" href={`/users/${user.id}`}>
    <div class="items-right float-right">

      <button type="button"  on:click|preventDefault={()=> handleDelete(user.id)} class="btn btn-sm variant-filled">X</button>
      </div>
    <Avatar src='src/files/person-placeholder-portrait.png' width="w-" />
	
    <h2> {user.first_name} {user.last_name} </h2>
    <h3>{user.username}</h3>
    <a href='/users/{user.id}'>Edit</a>

</a>
</div>

  {/each}
  {/if}
</div>
</div>

