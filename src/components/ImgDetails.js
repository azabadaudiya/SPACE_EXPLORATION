import { React } from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { MobileView } from 'react-device-detect';

export default function ImgDetails(props) {
  
  

   
    function share() {
        navigator.share({
            "title": "Share this Image",
            "text": props.NASA_id,
            "url": window.location.href
        })
    }

    return (
        <>
            <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
                <div className="text-center">


                    <h1>
                        {props.title}
                    </h1>

                    {/* <img src="https://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg" className="img-fluid" /> */}
                    <Zoom>
                        <img src={props.img_src} className="img-fluid" alt={props.NASA_id} />
                    </Zoom>
                    
                    <MobileView>
                        <br />
                        <button style={{ float: "right", textAlign: "center" }} className="btn btn-danger" onClick={share}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg> Share

                        </button>
                        <br />
                        <br />
                    </MobileView>
                   
                </div>
                <br />
                <hr />
                <br />
                <div className="text-center">
                    <h2>NASA ID - <b>{props.NASA_id}</b></h2>
                    <h2>Taken on - <b>{props.taken_on}</b></h2>
                    <h2>Center - <b>{props.center}</b></h2>
                </div>

                <h2>
                    Description
                </h2>

                <p dangerouslySetInnerHTML={{
                    __html: props.description
                }}>

                </p>

            </div>
        </>
    )
}

ImgDetails.propTypes = {
    title: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    NASA_id: PropTypes.string.isRequired,
    center: PropTypes.string.isRequired,
    description: PropTypes.string,
    taken_on: PropTypes.string,
}


ImgDetails.defaultProps = {
    description: "<em>No Description Provided</em>"
}