import {createClient} from "pexels";
import {useEffect, useState} from "react";
import '../assets/css/GridStyle.css';

export const Grid = () => {

    const [pageNo, setPageNo] = useState(1);
    const [load, setLoad] = useState(true);
    const [data, setData] = useState([]);

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

   const getContent = async () => {

       await client.photos.curated({per_page: 32, page: pageNo})
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
        getContent();
    }, [pageNo]);

   useEffect(()=>{
       window.addEventListener("scroll", handleScroll);
   },[]);


    return (
        <>
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
                                    <div className="grid-item">
                                        <div className="card">
                                            <div className="img-box"><img src={value.src.portrait} id={value.id} alt={value.photographer} title={value.photographer}/></div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-light fw-bold" key={index}>By: {value.photographer}</h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="text-center"><img src="images/loader.gif" alt="loading..."/></div>
            </div>
        </>
    )
}