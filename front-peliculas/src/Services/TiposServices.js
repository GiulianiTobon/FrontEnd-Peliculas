import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerTipo = () => {
    return axiosConfig.get('tipo',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}