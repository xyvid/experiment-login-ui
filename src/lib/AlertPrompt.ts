import { modalStore} from  '@skeletonlabs/skeleton';
import type { ModalSettings } from '@skeletonlabs/skeleton';

 export function XyvidConfirm(dTitle: string, dBody:string, dPromise:(arg: boolean) => any ) { 

const confirm: ModalSettings = {
	type: 'confirm',
	// Data
	title: dTitle,
	body: dBody,
	// TRUE if confirm pressed, FALSE if cancel pressed
	response: (r: boolean) => dPromise(r)
};
modalStore.trigger(confirm);

 }
    

 export function XyvidAlert(dTitle: string, dBody:string) { 

    const alert: ModalSettings = {
        type: 'alert',
        // Data
        title: dTitle,
        body: dBody,
     
    };
    modalStore.trigger(alert);
    
     }