import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerDirectores = () => {
    return axiosConfig.get('director?estado=Activo',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}