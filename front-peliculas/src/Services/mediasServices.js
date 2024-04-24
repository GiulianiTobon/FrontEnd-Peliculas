import { axiosConfig } from "../Configurations/axiosConfiguration"

export const obtenerMedias = () => {
    return axiosConfig.get('media',{
        
        headers:{
            'Content-Type' : 'application/json'
        }
    })
}

export const obtenerTipo = (tipo) => {
    return axiosConfig.get('media ? tipo ='+tipo,
        {
            headers: {
                'Content-Type' : 'application/json' 
            }
        }
    )    
}



