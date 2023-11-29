import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "rgba(226, 17, 139, 0.300)" }}
      >
        <div className="container-fluid">
          <Row className="w-100 justify-content-center align-items-center">
            <Col xs="auto">
              <h2>Quizz App</h2>
            </Col>
          </Row>
        </div>
      </nav>
    </>
  );
}