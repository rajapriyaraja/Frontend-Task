import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddSchema = () => {
    if (!dropdownValue) return;

    const selectedSchema = availableSchemas.find(
      (schema) => schema.value === dropdownValue
    );
    setSelectedSchemas([...selectedSchemas, selectedSchema]);

    setAvailableSchemas(availableSchemas.filter((schema) => schema.value !== dropdownValue));
    setDropdownValue("");
  };

  const handleSubmit = () => {
    const schemaData = selectedSchemas.map((schema) => ({
      [schema.value]: schema.label,
    }));

    const data = {
      segment_name: segmentName,
      schema: schemaData,
    };

    // Use the webhook URL from webhook.site here
    axios.post("https://webhook.site/your-webhook-url", data)
      .then((response) => {
        console.log("Data sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    handleClose();
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        Save Segment
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saving Segment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter the Name of the Segment</Form.Label>
              <Form.Control
                type="text"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Add schema to segment</Form.Label>
              <Form.Control
                as="select"
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
              >
                <option value="">Select schema</option>
                {availableSchemas.map((schema) => (
                  <option key={schema.value} value={schema.value}>
                    {schema.label}
                  </option>
                ))}
              </Form.Control>
              <Button variant="link" onClick={handleAddSchema}>
                +Add new schema
              </Button>
            </Form.Group>

            {selectedSchemas.length > 0 && (
              <div style={{ backgroundColor: "#e3f2fd", padding: "10px" }}>
                {selectedSchemas.map((schema, index) => (
                  <div key={index}>
                    <Form.Control
                      as="select"
                      value={schema.value}
                      onChange={(e) => {
                        const updatedSchema = availableSchemas.find(
                          (s) => s.value === e.target.value
                        );
                        const newSelectedSchemas = [...selectedSchemas];
                        newSelectedSchemas[index] = updatedSchema;
                        setSelectedSchemas(newSelectedSchemas);
                      }}
                    >
                      {availableSchemas.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                ))}
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save the Segment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
