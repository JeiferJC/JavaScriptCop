import axios from "axios";


const baseUrl= "https://rickandmortyapi.com/api"

export const getCharacters= async (page= null)=>{
    const endpoint= `${baseUrl}character/${page ? `?page=${page}` : ''}`;
    const response= await axios.get(endpoint);
    console.log(response);
    //Retorna valores de la api data=(datos generales de la api) results=(results es una seccion de datos de la api) 
    return response.data.results;
}

export const getCharacteresById=async(id)=>{
    const endpoint= `${baseUrl}character/${id} `
    return await axios.get(endpoint);
}