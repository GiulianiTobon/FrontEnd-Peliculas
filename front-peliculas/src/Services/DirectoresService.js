import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerDirectores = () => {
    return axiosConfig.get('director',
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )
}