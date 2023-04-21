import type {Actions} from './$types';
import type { PageServerLoad } from './$types';
 
export const actions = {
    changeUsersPassword: async({cookies, request}) => {
        var requestFormData = await request.formData();
     
        var email =   requestFormData.get('email');
        var password =   requestFormData.get('password');
        
            const requestOptions = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: email, Password: password })
            };
           const res =  await fetch('http://localhost:4000/Password/authenticate', requestOptions)
          const result = await res.json();
                  
if(res.ok)
{
    console.log(result)




    
    const res2 = await fetch('http://localhost:4000/Users/',{
        method: 'get',
        credentials: "include",
        headers: {  'Content-Type': 'application/json', Authorization: result.token}
    });


    const usersresult = await res2.json();
    console.log(usersresult);


}


    }
}satisfies Actions


export const load = (async (event) => {
    console.log(event.url.searchParams.get('name'));
    console.log(event.url.searchParams.get('age'));
   
    return {};
  }) satisfies PageServerLoad;

