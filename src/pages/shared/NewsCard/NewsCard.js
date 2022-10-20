import React from 'react';
import Card from 'react-bootstrap/Card';
const NewsCard = ({news}) => {
    const {author,image_url,thumbnail_url,title} = news
    
    return (
        <Card className='mb-3'>
        <Card.Header>Featured</Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
      
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsCard;