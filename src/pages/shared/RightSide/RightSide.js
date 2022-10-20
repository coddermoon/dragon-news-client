import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./RightSIde.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from "../BrandCarosel/BrandCarosel";
const RightSide = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Sign in With google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          {" "}
          <FaGithub /> SIgn in With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram /> Instragram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="carosel">
        <BrandCarosel/>
      </div>
    </div>
  );
};

export default RightSide;
