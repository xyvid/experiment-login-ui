/*

export async function handleFetch({ request, fetch }) {
  console.log(request.url);
if(request.url.includes('authenticate') || request.url.includes('refreshToken') )
{

  console.log("Authentication Call");
  return fetch(request);
}
};*/
  

/*
if(!isTokenExpired(session.token)){
  request.headers.set('Authorization', session.token);
  console.log("Regular Call");
  return fetch(request);
}
else{
  const requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Token: session.token, RefreshToken: session.refresh_token })
};
const res =  await fetch('http://localhost:4000/Users/RefreshToken', requestOptions);

if(res.ok)
{
  console.log("Refresh  Call");
const result = await res.json();

loadSession(result);

request.headers.set('Authorization', session.token);
return fetch(request);
}
else
{
  console.log("Invalid Refresh Token Call");
  await clearSession();


  goto("/login");
}
   

  }
}*/