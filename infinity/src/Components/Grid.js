import {createClient} from "pexels";
import {useEffect} from "react";

export const Grid = () => {

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

    function getContent() {
        client.photos.curated({ per_page: 16 })
            .then(res => {
                console.log(res);
            })
    }

    useEffect(()=>{
        getContent();
    }, []);

    return(
        <>
            <div className="grid-cont"></div>
        </>
    )
}