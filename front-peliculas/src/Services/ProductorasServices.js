import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerProductoras = () => {
    return axiosConfig.get('productora',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}