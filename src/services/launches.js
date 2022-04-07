/*Este servicio se encargará de hacer la llamada a la API */

const API_URL = " https://api.spacexdata.com/v3";
/* Las exportamos porque las vamos a llamar en varios puntos de nuestra app*/
export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json()
        return data;
    } catch (error) {
        console.erro("erroror en la petición a todos los launches: ", error)
    }
}
export async function getLaunchByFlightNumber(flightNumber) {
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.erro(`erroror en la petición al launch ${flightNumber}`, error)
    }
}