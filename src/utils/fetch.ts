export function fetchData<T> (url: string, init?: RequestInit): Promise<T> {
   return fetch(url, init)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            throw Error(error);
        });
}