import {createClient} from "pexels";
import {useEffect, useState} from "react";
import '../assets/css/GridStyle.css';

export const Grid = () => {

    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

   const getContent = async () => {
       await client.photos.curated({per_page: 32, page: pageNo})
            .then(res => {
                console.log(res);
                let images = res.photos;
                setData((prev)=> [... prev, ... images]);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(()=>{
        getContent();
    }, [pageNo]);


    return (
        <>
            <div className="grid-cont" id="gridCont">
                <div className="top-head text-center">
                    <h1 className="p-0 m-0 text-light fw-bold py-4">Take your Pick</h1>
                    <h5 className="p-0 m-0 text-light fw-bold">from <span className="text-uppercase brandName">Inf<span className="hdPrimary brandName">in</span>ity</span></h5>
                </div>
                <button className="btn btn-outline-light" onClick={getContent}>Get More</button>
                <div className="grid-content">
                {
                    data.map((value, index)=>{
                        return(
                            <>
                                <div className="grid-item">
                                    <div className="card">
                                        <img src={value.src.portrait} alt={value.id}/></div>
                                            <div className="card-body">
                                                <h5 className="card-title text-light">By: {value.photographer}</h5>
                                            </div>
                                    </div>

                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}