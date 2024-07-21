import { Header } from "../ui"


export const IndexLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
