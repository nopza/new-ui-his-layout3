import React from 'react';
import {
  Row, Col, Button, Card, CardHeader, CardBody, Modal,
  ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label, CardTitle} from 'reactstrap';
import { AvField, AvForm, AvCheckboxGroup, AvCheckbox, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
// import CameraGG from './CameraGG';
import Select from 'react-select'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';



const columns1 = [{
  dataField: 'id',
  text: 'วันที่/เวลาที่แก้ไข',
  sort: true
}, {
  dataField: 'symptom',
  text: 'ชื่อ-สกุลเดิม',
  sort: true
}, {
  dataField: 'authority',
  text: 'ชื่อ-สกุลใหม่',
  sort: true
}, {
  dataField: 'doctor',
  text: 'ผู้รับเเจ้ง',
  sort: true
}];


const { SearchBar } = Search;

const rows1 = [{ id: '01/01/2562 16:00', symptom: 'Tanya', authority: '999', doctor: 'TEst'}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: []
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total"> &nbsp;
    Showing {from} to {to} of {size} Results
  </span>
);

const options1 = {
  paginationSize: 4,
  pageStartIndex: 1,
  firstPageText: '<<',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: rows1.length
  }]
};



class Cinformation extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        Forename: '' , //ชื่อ
        Surname: '' , //สกุล
        
    };
}
  render() {
    return (
      <div>
        <Card >
          <CardHeader tag="h5" body className="text-left">
            <h4> ข้อมูลการเปลี่ยนชื่อ-สกุล </h4>
          </CardHeader>
          <CardBody>
            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> เปลี่ยนชื่อ-สกุล </h4>
              </CardHeader>
              <CardBody>
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="Forename"   />  &nbsp;
                    <Input type="text" name="Surname"  />
                  </FormGroup>
                  <Button color="success"> ยืนยันการเปลี่ยนชื่อ-สกุล</Button>
                </Form>
              </CardBody>
            </Card>

            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> ประวัติการเปลี่ยนชื่อ-สกุล </h4>
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                  keyField="id"
                  data={rows1}
                  columns={columns1}
                  search
                >
                  {
                    props => (
                      <div>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <BootstrapTable
                          selectRow={selectRow}
                          hover={true}
                          pagination={paginationFactory(options1)}
                          {...props.baseProps}
                        />
                      </div>
                    )
                  }
                </ToolkitProvider>
                <br />
                <br />
                <br />
                <br />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Cinformation;