import React from "react";
import './Book.scss';
import { Card } from "react-bootstrap";
import { BOOKS_IMAGES } from '../../api/api';

function Book (props) {

    const { 
        Contributor1_PersonName, 
        Title_DistinctivetitlebookCovertitle_TitleText, 
        Location, 
        Cover_File 
    } = props.book;

    const getImages = () => {
        return BOOKS_IMAGES.concat(Location + '/' + Cover_File);
    }

    return (
        <div className="Book">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getImages()} />
            <Card.Body className="Book__cardBody">
                <Card.Title>{Title_DistinctivetitlebookCovertitle_TitleText}</Card.Title>
                <Card.Text>
                    {Contributor1_PersonName}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Book;