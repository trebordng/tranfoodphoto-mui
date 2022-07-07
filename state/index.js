import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState} = createGlobalState({
    mode:'light',
    loading:'true',
    cover:""
})

export {setGlobalState,useGlobalState};