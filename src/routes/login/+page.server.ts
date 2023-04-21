/* import type {Actions} from './$types';

export const actions = {
    loginUser: async({cookies, request}) => {
        var requestFormData = await request.formData();
     
        var email =   requestFormData.get('email');
        var password =   requestFormData.get('password');
        
            const requestOptions = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: email, Password: password })
            };
           const res =  await fetch('http://localhost:4000/Users/authenticate', requestOptions)
          const result = await res.json();
          
if(res.ok)
{
    
    console.log(result)
    loadSession(result.Token);
    dialogs.alert('Successfully Logged In');
        return{success:true};
    
 
    




    
    const res2 = await fetch('http://localhost:4000/Users/',{
        method: 'get',
        credentials: "include",
        headers: {  'Content-Type': 'application/json', Authorization: result.token}
    });


    const usersresult = await res2.json();
    console.log(usersresult);

    
  

}
else
{
    dialogs.alert('Failed To Login');
    return{success:false};
}


    }
}satisfies Actions

 */