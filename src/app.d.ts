// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces



declare global {

	import { dialogs } from "svelte-dialogs";
    namespace App {
        interface Error {
            message: string;
            errorId: string;
        }
    }

/* 	dialogs.config({
	global: {
	  overlayClass: "some-other-class",
	  dialogClass: "some-other-class",
	  closeButtonClass: "some-other-class",
	  closeButtonText: "close me",
	  headerClass: "some-other-class",
	  titleClass: "some-other-class",
	  bodyClass: "some-other-class",
	  footerClass: "some-other-class",
	},
  }); */
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}


		
	}
}

export {};
