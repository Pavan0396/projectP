import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataTable from '../../components/DataTable'

const Home = () => {
  const sampleData = [
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
    { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
    { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
    { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
    { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  { progress: "Not started" ,dueDate: "01/08/2025", title: "Actual EUR/PLN exchange rate and EURIBOR Curve", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "02/08/2025", title: "Annual Fees to Common Representative", assignee: "Ignacio Ruiz" },
  { progress: "Not started" , dueDate: "09/08/2025", title: "Cover Ratio Certificate", assignee: "Saeed Abdali" },
  // ... add more
  // ... add more
  // ... add more
];
  return (
   <Container>
    <Row className="my-4">
      <Col md={6}>
         <DataTable data={sampleData}/>
      </Col>
      <Col md={6}>
         <DataTable data={sampleData}/>
      </Col>
    </Row>
   </Container>
  )
}

export default Home