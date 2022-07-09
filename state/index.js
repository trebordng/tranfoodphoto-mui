import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState} = createGlobalState({
    mode:'light',
    loading:true,
    cover:undefined,
})

export {setGlobalState,useGlobalState};