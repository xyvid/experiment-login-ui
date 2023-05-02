<script>

    import Alert from "$lib/Alert.svelte";
    import {ALERT_TYPE,alertType, alertMessage} from  '../stores/alertStore';
    import { dialogs } from "svelte-dialogs";
    import  {loadSession, clearSession, session, removeSession,isLoggedIn} from '../stores/sessionStore';
  import { goto } from '$app/navigation';
  import { AppShell, LightSwitch } from '@skeletonlabs/skeleton';
  import { Modal, modalStore } from '@skeletonlabs/skeleton';


  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';



   async function LogoutUser(){

    if( await dialogs.confirm('Are you sure you want to log out?'))
    {
    
      await clearSession();

      var s = $session;
      goto("/login");
    }

    async function ClearSession(){
    }

  }
  </script>





  <AppShell>
    <Modal/>
    {#if $isLoggedIn}
    <!-- this message is ephemeral; it exists because the page was rendered in
        response to a form submission. it will vanish if the user reloads -->
    <p>   Welcome, {$session.first_name} {$session.last_name} <LightSwitch/><!-- {  requestFormData.user.name} --></p>
    <input on:click="{LogoutUser}" class="float-right focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 hover:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="submit" value="Sign Out">
  {/if}
  
    <svelte:fragment slot="header"></svelte:fragment>
    <svelte:fragment slot="sidebarLeft"> </svelte:fragment>
    <svelte:fragment slot="sidebarRight"></svelte:fragment>
    <svelte:fragment slot="pageHeader"></svelte:fragment>
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter"></svelte:fragment>
    <svelte:fragment slot="footer"></svelte:fragment>
  </AppShell>



