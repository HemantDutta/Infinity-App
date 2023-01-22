import '../assets/css/HeroStyle.css';
import {createClient} from "pexels";
import {useEffect} from "react";

export const Hero = () => {

    const client = createClient('ZtDkSHkkb20vljXydzL79IG48JZ3zUiXiSLlSXH7xut6Jqrpzhg2rOTQ');

    function getRandom() {
        client.photos.random()
            .then(res => {
                console.log(res);
                document.getElementById('heroImg').src = res.src.landscape;
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(()=>{
        getRandom();
    }, [])

    return(
        <>
            <div className="text-light col-xxl-12 px-4 py-5 hero-cont">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="" className="d-block mx-lg-auto img-fluid" id="heroImg" alt="HeroImg" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to <span className="text-uppercase brandName">Inf<span className="hdPrimary brandName">in</span>ity</span></h1>
                        <p className="lead">Introducing Infinity, the ultimate destination for all your wallpaper needs. Our website offers an endless selection of high-quality wallpapers that are sure to suit any style or preference. Whether you're looking for a bold and colorful design or something more subtle and understated, we have it all.</p>
                    </div>
                </div>
            </div>
        </>
    )
}