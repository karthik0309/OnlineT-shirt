import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import "./Toast.css";
export default function Toastyy(props) {
  const [show, setShow] = useState(props.show);
  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        right: 20,
      }}
    >
      <Toast
        onClose={() => {
          setShow(false);
          props.onCancel();
        }}
        show={show}
        delay={1000000}
        autohide
        animation={false}
      >
        <Toast.Header>
          <strong className="mr-2">{props.name}</strong>
          <small>Added to Cart</small>
        </Toast.Header>
      </Toast>
    </div>
  );
}
