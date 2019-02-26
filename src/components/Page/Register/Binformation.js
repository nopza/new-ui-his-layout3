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
  text: 'สังกัด',
  sort: true
}, {
  dataField: 'symptom',
  text: 'ส่วนงาน',
  sort: true
}, {
  dataField: 'authority',
  text: 'รหัสพนักงาน',
  sort: true
}, {
  dataField: 'doctor',
  text: 'ส่วนงานย่อย',
  sort: true
}, {
  dataField: 'location',
  text: 'Comment',
  sort: true
}];



const rows1 = [{ id: '', symptom: '', authority: '', doctor: '', location: '' }];

const { SearchBar } = Search;

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


// select
const Relateoption = [
  { value: 'พ่อ', label: 'พ่อ' },
  { value: 'เเม่', label: 'เเม่' },
  { value: 'พี่', label: 'พี่' },
  { value: 'น้อง', label: 'น้อง' },
  { value: 'ลุง', label: 'ลุง' },
  { value: 'ป้า', label: 'ป้า' },
  { value: 'น้า', label: 'น้า' }
];

const Memberoption = [
  { value: 'มหาวิทยาลัยเทคโนโลยีสุรนารี', label: 'มหาวิทยาลัยเทคโนโลยีสุรนารี' }
];


const Partoption = [
  { value: 'วิศวกรรมศาสตร์', label: 'วิศวกรรมศาสตร์' },
  { value: 'เทคโนโลยีสารสนเทศ', label: 'เทคโนโลยีสารสนเทศ' }
];


const Subsectionoption = [
  { value: 'วิศวกรรมคอมพิวเตอร์', label: 'วิศวกรรมคอมพิวเตอร์' },
  { value: 'IT', label: 'IT' }
];

class Binformation extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          Relate:"", //ความสัมพันธ์
          Member: '' , //สังกัด
          Part: '' , //ส่วนงาน
          Student: '' , //นักศึกษา
          Employee: '' , //บุคคากร
          Subsection:'',//ส่วนงานย่อย
          empid:'',//รหัสพนักงาน
          Comment: '' , //Comment
          cardstart: '' , //วันที่ออกบัตร
          cardexpire: '' , //วันที่บัตรหมดอายุ
         
  };
}

  render() {
    return (
      <div>
        <Card >
          <CardHeader tag="h5" body className="text-left">
            <h4> สังกัดหน่วยงานและสวัสดิการ </h4>
          </CardHeader>
          <CardBody>
            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> ข้อมูลบุคลากร/นักศึกษา </h4>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>สำนัก/สังกัด</Label>
                      <Select
                        options={Memberoption} />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >ส่วนงาน/สาขาวิชา</Label>
                      <Select
                        options={Partoption} />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >ส่วนงานย่อย</Label>
                      <Select
                        options={Subsectionoption} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>รหัส นศ./พนง.</Label>
                      <Input type="number" name="Age" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <br />
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                          นักศึกษา
                        </Label>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <br />
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                          พนักงาน
                        </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> สวัสดิการครอบครัวพนักงาน </h4>
              </CardHeader>
              <CardBody>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>สังกัด</Label>
                      <Select
                        options={Memberoption} />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >ส่วนงาน</Label>
                      <Select
                        options={Partoption} />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >ส่วนงานย่อย</Label>
                      <Select
                        options={Subsectionoption} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>รหัส พนง.</Label>
                      <Input type="number" name="Age" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >Comment</Label>
                      <Input type="number" name="Age" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label >คนไข้เป็น</Label>
                      <Select
                        options={Relateoption} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label >Comment</Label>
                      <Input type="date" name="Age" />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label >Comment</Label>
                      <Input type="date" name="Age" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <br />
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                          Active
                        </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <ToolkitProvider
                  keyField="id"
                  data={rows1}
                  columns={columns1}
                  search>
                  {
                    props => (
                      <div>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <BootstrapTable
                          hover={true}
                          pagination={paginationFactory(options1)}
                          {...props.baseProps} />
                      </div>
                    )
                  }
                </ToolkitProvider>
                <FormGroup className = " text-right"> 
                  <Button color = "success"><i class="fas fa-plus"></i> เพิ่ม</Button>{' '}
                  <Button outline color = "danger"><i class="fas fa-edit"></i> แก้ไข</Button>{' '}
                  <Button color = "danger"><i class="fas fa-trash-alt"></i> ลบ</Button>{' '}
                </FormGroup>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Binformation;