import { useDebugValue, useState } from "react";

function useExample() {
    const [b, setB] = useState(false)

    useDebugValue(b ? 'isActive' : 'is Inactive')
    return [b,setB]
}
export default function ExampleActivity() {
    useExample()
    return <div />
}