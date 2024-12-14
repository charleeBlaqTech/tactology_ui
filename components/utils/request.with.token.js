export async function fetchWithToken(url, method = 'GET', data = null) {
   // const token = document.cookie.split('; ').find((row) => row.startsWith('token='));
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    // if (token) {
    //   headers['Authorization'] = `Bearer ${token.split('=')[1]}`;
    // }
  
    const options = {
      method,
      headers,
    };
  
    if (data) {
      options.body = JSON.stringify(data);
    }
  
    const response = await fetch(url, options);

    console.log(response)
    if (response.status === 401) {
      window.location.href = '/login';
      return;
    }
  
    return response.json();
  }