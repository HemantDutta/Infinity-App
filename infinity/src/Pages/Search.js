import {Navbar} from "../Components/Navbar";
import {useEffect, useState} from "react";
import {createClient} from "pexels";
import {Link, useParams} from "react-router-dom";

export const Search = () => {

    const [pageNo, setPageNo] = useState(1);
    const [load, setLoad] = useState(true);
    const [data, setData] = useState([]);

    let {query} = useParams();
    console.log(query);

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

    const openModal = async (event) => {
        console.log();
        let id = event.currentTarget.id;
        await client.photos.show({id})
            .then(res => {
                console.log(res);
                document.getElementById('modalTitle').innerText = `Clicked by: ${res.photographer}`;
                document.getElementById('modalImg').src = res.src.original;
                document.getElementById('download').href = res.src.original;
                document.getElementById('modal').click();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getNew = async () => {
        await client.photos.search({per_page: 32, page: 1, query: query})
            .then(res => {
                console.log(res);
                let images = res.photos;
                setData(images);
                console.log(data);
                setLoad(false);
                console.log("Page no: "+pageNo);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getContent = async () => {

        await client.photos.search({per_page: 32, page: pageNo, query: query})
            .then(res => {
                console.log(res);
                let images = res.photos;
                setData((prev)=> [... prev, ... images]);
                console.log(data);
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
            })
    }



    const handleScroll = async () => {
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 5 > document.documentElement.scrollHeight){
                setLoad(true);
                setPageNo((prev)=> prev + 1);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(()=>{
        if(pageNo === 1){} else {getContent();
            console.log('content effect')}
    }, [pageNo]);

    useEffect(()=>{
        getNew();
    }, [query]);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        console.log('scroll effect');
    },[]);
    return(
        <>
            <Navbar/>
            {/*Breadcrumb*/}
            <div className="bread mt-2 p-2 bg-dark">
                <span className="text-uppercase text-light"><Link to={'/'} id="home">Home</Link> > Search: <span className="primary-color">{query}</span></span>
            </div>
            {/*Breadcrumb end*/}
            <div className="grid-cont" id="gridCont">
                <div className="top-head text-center">
                    <h1 className="p-0 m-0 text-light fw-bold py-4">Take your Pick</h1>
                    <h5 className="p-0 m-0 text-light fw-bold">from <span className="text-uppercase brandName">Inf<span className="hdPrimary brandName">in</span>ity</span></h5>
                </div>
                <div className="grid-content">
                    {
                        data.map((value, index) => {
                            return (
                                <>
                                    <div className="grid-item" id={value.id} onClick={openModal}>
                                        <div className="card">
                                            <div className="img-box"><img src={value.src.portrait} alt={value.photographer} title={value.photographer}/></div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-light fw-bold">By: {value.photographer}</h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                {load && `<div className="text-center"><img src="images/loader.gif" alt="loading..."/></div>`}
            </div>
            {/*Modal*/}
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary d-none" id="modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-light" id="modalTitle"></h5>
                                <button type="button" className="bg-transparent text-light border-0 xmark" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                            </div>
                            <div className="modal-body modalImg">
                                <img src="" alt="" id="modalImg"/>
                            </div>
                            <div className="modal-footer">

                                <a href="" download="infinity-wallpaper" id="download"><button type="button" className="btn hdbtn">Download</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal End*/}
        </>
    )
}