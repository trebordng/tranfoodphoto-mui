import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState} = createGlobalState({
    mode:'light',
    loading:false,
    cover:undefined,
})

export {setGlobalState,useGlobalState};