<script>

	import { AuthFetch } from '../../lib/AuthFetch';
	//import { sveltekit } from '@sveltejs/kit/vite';

import  {loadSession, session, removeSession} from '../../stores/sessionStore';
import { dialogs } from "svelte-dialogs";
import { goto } from '$app/navigation';
	import { config } from "../../global";
  

 async function onSubmit(e) {

  removeSession();
  const formData = new FormData(e.target);

         var email =   formData.get('email');
        var password = formData.get('password');
        
            const requestOptions = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: email, Password: password })
                
                
            };
            const url =  '/Users/authenticate';
           const res =   await AuthFetch(requestOptions, url);

          
          
if(res == "Success")
{

  
    dialogs.alert('Successfully Logged In');
 
  goto('/users');
 }
 else
{
    dialogs.alert('Failed To Login');
}
 };
</script>





<div class="rounded-container-token  flex items-center justify-center h-screen">
  <div class="max-w-md space-y-8 p-4">
 
    <div>
      <img class="mx-auto h-12 w-auto" src="https://akamaissl.xyvid.com/tpconnect_12/img/logos/logo.png" alt="Your Company">
      <h2 class=" text-center">Sign in to your account</h2>
    </div>
    <form class="mt-8 space-y-6" on:submit|preventDefault={onSubmit}>
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="txtemailaddress" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded">
          <label for="remember-me" class="ml-2 block text-sm">Remember me</label>
        </div>

        <div class="text-sm">
        <a href="/forgotpassword" >Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center btn variant-filled ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
