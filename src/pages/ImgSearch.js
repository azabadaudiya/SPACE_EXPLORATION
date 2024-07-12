import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

export default function ImgSearch() {
    const [display, setDisplay] = useState("none");
    const [searchResults, setSearchResults] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const bringMore = () => {
        let query = document.getElementById("input").value;
        axios.get(`https://images-api.nasa.gov/search?page=1&q=${query}&media_type=image`)
            .then((response) => {
                setDisplay("");
                setSearchResults(response.data.collection.items);

                if (response.data.collection.items.length === 0) {
                    setNoResults(true);
                } else {
                    setNoResults(false);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // Handle error, e.g., show error message to the user
            });
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
            <br />
            <div className="mb-3">
                <h1 className="centre">
                    Enter the search term
                </h1>
                <br />
                <input type={"text"} className="form-control" placeholder={"Enter the search term here"} id={"input"} />
            </div>
            <button className="btn btn-primary" onClick={bringMore}>
                Search for it
            </button>
            <div style={{ textAlign: "center", display: display }}>
                <div className="row">
                    {searchResults.map((item, index) => (
                        <div className="col-lg-4 d-flex align-items-stretch" key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.links[0].href} />
                                <Card.Body>
                                    <Card.Title>{item.data[0].title}</Card.Title>
                                    <Card.Text>
                                        {truncateText(item.data[0].description, 100)} {/* Show only 3 lines */}
                                    </Card.Text>
                                    {item.data[0].description.split('\n').length > 100 && (
                                        <Button variant="link" onClick={() => console.log("Implement expand/collapse logic here")}>
                                            {false ? 'Show More' : 'Show Less'}
                                        </Button>
                                    )}
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Taken on - <b>{item.data[0].date_created}</b></ListGroup.Item>
                                    <ListGroup.Item>Center - <b>{item.data[0].center}</b></ListGroup.Item>
                                    <ListGroup.Item>NASA Id - {item.data[0].nasa_id}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Link to={`/image/${item.data[0].nasa_id}`} className="card-link">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <br />
                <h3 id="end" style={{ display: noResults ? "" : "none" }}>
                    Sorry, No results found
                </h3>
            </div>
        </div>
    );
}
