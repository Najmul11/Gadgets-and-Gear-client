import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - G&G`
    },[title])
}
export default useTitle;