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
import MedicCare from './MedicCare';




const columns1 = [{
  dataField: 'id',
  text: 'สิทธิ',
  sort: true
}, {
  dataField: 'tutelage',
  text: 'ความคุ้มครอง',
  sort: true
}, {
  dataField: 'contact',
  text: 'Contact',
  sort: true
}, {
  dataField: 'contact',
  text: 'รพ. ที่ใช้สิทธิ',
  sort: true
}, {
  dataField: 'contact',
  text: 'เลขที่บัตร',
  sort: true
}, {
  dataField: 'contact',
  text: 'วันที่เริ่ม',
  sort: true
}, {
  dataField: 'contact',
  text: 'วันที่สิ้นสุด',
  sort: true
}];


const columns2 = [{
  dataField: 'id',
  text: 'ลำดับ',
  sort: true
}, {
  dataField: 'authority',
  text: 'สิทธิ',
  sort: true
}, {
  dataField: 'tutelage',
  text: 'ความคุ้มครอง',
  sort: true
}, {
  dataField: 'contact',
  text: 'Contact',
  sort: true
}, {
  dataField: 'contact',
  text: 'รพ. ที่ใช้สิทธิ',
  sort: true
}, {
  dataField: 'contact',
  text: 'เลขที่บัตร',
  sort: true
}, {
  dataField: 'contact',
  text: 'วันที่เริ่ม',
  sort: true
}, {
  dataField: 'contact',
  text: 'วันที่สิ้นสุด',
  sort: true
}];


const { SearchBar } = Search;

const rows1 = [{ id: 'ข้าราชการ', authority: 'Tanya', tutelage: '999', contact: 'TEst', contact: 'TEst' }];
const rows2 = [{ id: '1', authority: 'Tanya', tutelage: '999', contact: 'TEst', contact: 'TEst' }];





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

const options2 = {
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
    text: 'All', value: rows2.length
  }]
};


class Pinformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
     this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Card >
          <CardHeader tag="h5" body className="text-left">
            <h4> ข้อมูลสิทธิรักษา </h4>
          </CardHeader>
          <CardBody>
            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> สิทธิรักษาพยาบาลทั้งหมด </h4>
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
                <FormGroup className = " text-right"> 
                  <Button color = "success" onClick={this.toggle}><i class="fas fa-plus"></i> เพิ่ม</Button>{' '}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} 
                    className={this.props.className} size="lg" > 
                      <ModalHeader> สิทธิรักษาพยาบาล </ModalHeader>
                      <ModalBody >  

                        {/* MedicCare */}
                        <MedicCare/>

                      </ModalBody>
                      <ModalFooter>
                        <Button color="success" onClick={this.toggle}> เพิ่ม </Button>{' '}
                      </ModalFooter>
                    </Modal>
                  <Button color = "danger"><i class="fas fa-trash-alt"></i> ลบ</Button>{' '}
                </FormGroup>
              </CardBody>
            </Card>


            <Card >
              <CardHeader tag="h5" body className="text-left">
                <h4> สิทธิรักษาพยาบาลหลัก </h4>
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                  keyField="id"
                  data={rows2}
                  columns={columns2}
                  search
                >
                  {
                    props => (
                      <div>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <BootstrapTable
                          hover={true}
                          pagination={paginationFactory(options2)}
                          {...props.baseProps}
                        />
                      </div>
                    )
                  }
                </ToolkitProvider>
              </CardBody>
            </Card>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default Pinformation;