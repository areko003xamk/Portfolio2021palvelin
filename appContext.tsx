import React from 'react';

export interface AppContext {
    sukunimi : string,
    etunimi : string,
    valtio : string,
    osallistujat : any[]
};

const appContext = React.createContext<AppContext>({
    sukunimi : "",
    etunimi : "",
    valtio : "",
    osallistujat : []
    });

export default appContext;