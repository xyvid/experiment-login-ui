<script>
    import {ALERT_TYPE,alertType, alertMessage} from  '../stores/alertStore';

$: bgClass = () => {
    if($alertType === ALERT_TYPE.SUCCESS ){
        return 'bg-green-100';
    }
    else if($alertType === ALERT_TYPE.DANGER){
        return 'bg-red-100';
    }else{
        return 'bg-blue-100';
    };}

</script>

<div class="h-10   my-6">
    {#if $alertMessage != '' }
    <span class={`text-gray-900 text-cent   rounded-md p-4 mb-4 ${bgClass()}`} >
      {$alertMessage}</span>
{/if}
</div>