import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import card from './launch.module.css'
import { Link } from 'react-router-dom';
import shoes from '../Launch/index'
function LaunchIndex() {
  return (
    <>
      <Container>
        <Row>
          <div className={`${card.main_card} flex  space_between flex_wrape gap`}>
            {
              shoes.map((elem,index) => {
                let { name, img,id} = elem;
                return (
                  <Col key={index} sm={12} md={6} lg={3}>
                    <Card style={{ width: '18rem' }} >
                      <Card.Img variant="top" src={img} style={{ height: '15rem' }} />
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Link to={`/launch/${id}`}>
                          <Button variant="danger">
                            Shop Now
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default LaunchIndex