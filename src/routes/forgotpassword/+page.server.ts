import type {Actions} from './$types';
export const actions = {
    sendForgotPasswordRequest: async({cookies, request}) => {
        var requestFormData = await request.formData();
        console.log(requestFormData);

        var email =   requestFormData.get('email');
 

            const requestOptions = {
                method: 'post',
                headers: {         'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json;charset=UTF-8'},
                body: JSON.stringify(email)
            };
            console.log(requestOptions);
           const res =  await fetch('http://localhost:4000/PasswordReset/InitatePasswordReset', requestOptions)
          const result = await res.json();
              console.log(result);    


    }
}satisfies Actions

