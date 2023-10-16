import moment from 'moment';
export function getData () {

    
   
    
    const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
        (o) => ({
            name: o,
            count: Math.floor(Math.random() * (100 - 20) + 20),
        })
    );
    const cats = ["Monterrey", "Cd. de México", "Durango"].map(name => ({ name, value: Math.random() * 100000 }));
    return {
        "nombres": {
            nombres
        },
        "cats":{
            cats
        }

    
    }
}
export const data = getData()