import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerGeneros = () => {
    return axiosConfig.get('genero',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}