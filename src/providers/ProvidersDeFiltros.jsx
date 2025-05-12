import React, { useContext, useState} from 'react'

export const ContextoFiltro = React.createContext();


export const FiltroProvider = ({ children }) => {

     const  [filtro, setFiltro] = useState('Todos');


    const elegirFiltro = (nuevoFiltro) => {
        setFiltro(nuevoFiltro);
    }

    return (
        <ContextoFiltro.Provider value={{filtro, elegirFiltro }}>
                {children}
        </ContextoFiltro.Provider>
        
    )

}



export const useFiltro = () => {return useContext(ContextoFiltro)};
