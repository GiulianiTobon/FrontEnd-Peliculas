import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerProductoras = () => {
    return axiosConfig.get('productora?estado=Activo',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}