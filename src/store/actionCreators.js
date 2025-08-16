
export const actionNames ={
    LOGRES:'logres',
    INOUT:'inout',
    OUTIN:'logout'
}
export const selectors ={
    getLogRes:(state)=>state?.app?.name,
    getAge:(state)=>state?.app?.age,
    getPermit:(state)=>state?.app?.inout,
}

export const  actionCreators={
    logres(data){
        return({
            type:actionNames?.LOGRES,
            payload:data
        })
    },
   inout(data){
    return({
        type:actionNames?.INOUT,
        payload:data
    })
   }    
}