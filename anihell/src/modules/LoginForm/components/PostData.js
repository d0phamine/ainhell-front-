export function PostData(userData){

    let BaseUrl = 'http://127.0.0.1:8000/api/api-token-auth/';

    return new Promise((resolve, reject ) => {

        fetch(BaseUrl,{
            method: 'POST',
            body: JSON .stringify(userData),
            headers:{
                'Content-Type':'application/json'
            }
        })

        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error);
        });
    });
}