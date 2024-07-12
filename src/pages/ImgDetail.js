import React, { useEffect, useState } from 'react';
import ImgDetails from '../components/ImgDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ImgDetail() {
    const { id } = useParams();
    const img_url = `https://images-assets.nasa.gov/image/${id}/${id}~thumb.jpg`;
    const NASA_id = id;
    const [data, setData] = useState({
        title: "Loading",
        center: "Loading",
        description: "Loading",
        taken_on: "Loading"
    });

    useEffect(() => {
        axios.get(`https://images-assets.nasa.gov/image/${id}/metadata.json`)
            .then((response) => {
                let final_data = {
                    title: response.data['AVAIL:Title'],
                    center: response.data["AVAIL:Center"],
                    taken_on: response.data['AVAIL:DateCreated']
                };

                if (response.data["AVAIL:Description"] !== "") {
                    final_data['description'] = response.data["AVAIL:Description"].replace("\n", "<br/>");
                } else {
                    final_data['description'] = "<em>No Description Provided</em>";
                }

                setData(final_data);
            })
            .catch((err) => {
                console.error("Error fetching metadata:", err);
                window.location.href = "#/404";
            });
    }, [id]);

    return (
        <>
            <ImgDetails
                title={data['title']}
                center={data['center']}
                description={data['description']}
                img_src={img_url}
                NASA_id={NASA_id}
                taken_on={data['taken_on']}
            />
        </>
    );
}
