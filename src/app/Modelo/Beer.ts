export interface Beer {
    
    //DEL JSON EXTERNO ME HE HECHO CON LAS PROPIEDADES QUE DESPUES PUEDA UTILIZAR PARA MOSTRAR SU INFORMACION
    
    id: number;
    
    name: string;
    
    tagline: string;
    
    image_url: string;
    
    abv: number;
    
    ibu: number; 

    ebc: number; 
    
    food_pairing: string;
    
    isFavourite?: boolean;
}