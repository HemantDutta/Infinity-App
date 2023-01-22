import {createClient} from "pexels";
import {useEffect} from "react";
import '../assets/css/GridStyle.css';

export const Grid = () => {

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

    function getContent() {
        client.photos.curated({per_page: 16})
            .then(res => {
                console.log(res);
                    let data = res.photos;
                    let grid = document.getElementById('gridCont');
                    grid.innerHTML+= `<div className="grid-content mt-4">`;

                   data.map((x) => {
                       grid.innerHTML += `<div className="grid-item"><img src="${x.src.portrait}" alt="${x.photographer}"/></div>`
                    });

                    grid.innerHTML+= `</div>`
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        // getContent();
    }, []);

    return (
        <>
            <div className="grid-cont" id="gridCont">
                <div className="top-head text-center">
                    <h1 className="p-0 m-0 text-light fw-bold py-4">Take your Pick</h1>
                    <h5 className="p-0 m-0 text-light fw-bold">from <span className="text-uppercase brandName">Inf<span className="hdPrimary brandName">in</span>ity</span></h5>
                </div>
            </div>
        </>
    )
}