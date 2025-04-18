import axios from 'axios';

export async function getCity(cp: string): Promise<string | null> {
    try {
      const response = await axios.get(`https://api.zippopotam.us/es/${cp}`);
      const places = response.data.places;
      
  
      // Verifica si hay lugares en la respuesta y devuelve el "place name"
      if (places && places.length > 0) {
        return places[0]['place name'];
      } else {
        return null; // Si no hay lugares, devuelve null
      }
    } catch (error: any) {
      throw error.response?.data || 'Error al obtener el nombre del lugar';
    }
  };