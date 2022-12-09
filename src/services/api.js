export const getTournaments = async () => {
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USER_NAME + ":" + process.env.REACT_APP_PASSWORD));

    const rawResponse = await fetch('https://football.api.sandbox.sportal365.com/tournaments', {
      method: 'GET',
      headers,
    })
    const response = await rawResponse.json();
    return response;
}