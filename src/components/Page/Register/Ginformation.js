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
    text: 'ประเภทบัตร',
    sort: true

}, {
    dataField: 'Cardid',
    text: 'เลขที่บัตร',
    sort: true
}, {
    dataField: 'Cardstart',
    text: 'วันที่เริ่ม',
    sort: true
}, {
    dataField: 'Cardexpire',
    text: 'วันที่สิ้นสุด',
    sort: true
}];



const { SearchBar } = Search;

const rows1 = [{ id: '01/01/2562 16:00', Cardid: 'Tanya', Cardstart: '999', Cardexpire: 'TEst'}];

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
const TITLEUIDoption = [
    { value: 'นาย', label: 'นาย' },
    { value: 'นาง', label: 'นาง' },
    { value: 'นางสาว', label: 'นางสาว' }
];

const TitleENoption = [
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Miss', label: 'Miss' }
];

const SEXXXUIDoption = [
    { value: 'ชาย', label: 'ชาย' },
    { value: 'หญิง', label: 'หญิง' }
];

const MARRYUIDoption = [
    { value: 'โสด', label: 'โสด' },
    { value: 'สมรส', label: 'สมรส' },
    { value: 'หม้าย', label: 'หม้าย' },
    { value: 'หย่า', label: 'หย่า' },
    { value: 'แยกกันอยู่', label: 'แยกกันอยู่' }
];

const OccupUIDoption = [
    { value: 'นักบัญชี', label: 'นักบัญชี' },
    { value: 'แพทย์', label: 'แพทย์' },
    { value: 'พยาบาล', label: 'พยาบาล' },
    { value: 'เภสัช', label: 'เภสัช' },
    { value: 'ช่าง', label: 'ช่าง' }
];

const NALTYUIDoption = [
    { value: 'ไทย', label: 'ไทย' },
    { value: 'เวียดนาม', label: 'เวียดนาม' },
    { value: 'จีน', label: 'จีน' }
];

const RaceUIDoption = [
    { value: 'ไทย', label: 'ไทย' },
    { value: 'เวียดนาม', label: 'เวียดนาม' },
    { value: 'จีน', label: 'จีน' }
];

const RELGNUIDoption = [
    { value: 'พุทธ', label: 'พุทธ' },
    { value: 'คริสต์', label: 'คริสต์' },
    { value: 'อิสลาม', label: 'อิสลาม' }
];
const Bloodgrpoption = [
    { value: 'A', label: 'A' },
    { value: 'AB', label: 'AB' },
    { value: 'B', label: 'B' },
    { value: 'O', label: 'O' }
];

const BloodgrpRHoption = [
    { value: 'RH-', label: 'RH-' },
    { value: 'RH+', label: 'RH+' }
];

const Cardselectoption = [
    { value: 'บัตรประชาชน', label: 'บัตรประชาชน' },
    { value: 'ใบอนุญาตขับขี่', label: 'ใบอนุญาตขับขี่' }
];




class Ginformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disabled: false,
        }
    
        this.state = {
                        TITLEUID:"", //คำนำหน้า
                        Forename: '' , //ชื่อ
                        Surname: '' , //สกุล
                        Middlename:'',//ชื่อกลาง
                        Nickname:'',//ชื่อเล่น
                        TitleEN: '' , //คำนำหน้าภาษาอังกฤษ
                        ForenameEN: '' , //ชื่อภาษาอังกฤษ
                        SurnameEN: '' , //สกุลภาษาอังกฤษ
                        MiddlenameEN:'',//ชื่อกลางภาษาอังกฤษ
                        NicknameEN:'',//ชื่อเล่นภาษาอังกฤษ
                        NationalID:'',//เลขบัตรประชาชน
                        NIDStartDttm:'',//วันที่ทำบัตร
                        NIDEndDttm:'',//วันที่หมดอายุ
                        Institution:'',//หน่วยงาน
                        Birthdate: '' , //วันเกิด
                        Age: '' , //อายุ
                        SEXXXUID:'',//เพศ
                        MARRYUID:'',//สถานะสมรส
                        OccupUID:'',//อาชีพ
                        RaceUID: '' , //เชื่อชาติ
                        NALTYUID: '' , //สัญชาติ
                        RELGNUID: '' , //ศาสนา
                        Bloodgrp: '' , //หมู่เลือด
                        BloodgrpRH: '' , //หมู่เลือดRG
                        PhoneNumber: '' , //เบอร์โทร1
                        PhoneNumber2: '' , //เบอร์โทร2
                        PhoneNumber3: '' , //เบอร์โทร3
                        HomePhone: '' , //เบอร์บ้าน
                        WorkPhone: '' , //เบอร์ที่ทำงาน
                        Email: '' , //email
                        Line: '' , //line
                        IsVIP: '' , ///ผ้ป่วย VIP
                        InCups: '' , //** */
                        IsAnonymous: '' , //ไม่ระบุตัวตน
                        Cardselect: '' , //ประเภทบัตร
                        Cardid: '' , //เลขบัตร
                        Cardstart: '' , //วันที่เริ่ม
                        Cardexpire: '' , //วันที่สิ้นสุด
                        
        };
      }
    render() {
        return (
            <div>
                <Card >
                    <CardHeader tag="h5" body className="text-left">
                        <h4> ข้อมูลทั่วไป </h4>
                    </CardHeader>
                    <CardBody>
                        <Card >
                            <CardBody>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label>คำนำหน้า</Label>
                                            <Select
                                                options={TITLEUIDoption} />
                                                
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >ชื่อ</Label>
                                            <Input type="text" name="Forename"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >นามสกุล</Label>
                                            <Input type="text" name="Surname" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >ชื่อกลาง</Label>
                                            <Input type="text" name="Middlename" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >ชื่อเล่น</Label>
                                            <Input type="text" name="Nickname" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardBody>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label>Title</Label>
                                            <Select
                                                options={TitleENoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Name</Label>
                                            <Input type="text" name="ForenameEN" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Lastname</Label>
                                            <Input type="text" name="SurnameEN" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >Middlename</Label>
                                            <Input type="text" name="MiddlenameEN" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >Nickname</Label>
                                            <Input type="text" name="NicknameEN" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardBody>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >เลขบัตรประชาชน</Label>
                                            <Input type="number" name="NationalID" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >วันที่เริ่ม</Label>
                                            <Input type="date" name="NIDStartDttm" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >วันที่สิ้นสุด</Label>
                                            <Input type="date" name="NIDEndDttm" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <br />
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="Institution" />{' '}
                                                หน่วยงาน
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >วัน/เดือน/ปี เกิด</Label>
                                            <Input type="date" name="Birthdate" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >อายุ</Label>
                                            <Input type="number" name="Age" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label>เพศ</Label>
                                            <Select
                                                options={SEXXXUIDoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>สภาพสมรส</Label>
                                            <Select
                                                options={MARRYUIDoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>อาชีพ</Label>
                                            <Select
                                                options={OccupUIDoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>สัญชาติ</Label>
                                            <Select
                                                options={NALTYUIDoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>เชื้อชาติ</Label>
                                            <Select
                                                options={RaceUIDoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>ศาสนา</Label>
                                            <Select
                                                options={RELGNUIDoption} />
                                        </FormGroup>
                                    </Col>
                                    
                                </Row>

                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label>หมู่เลือด</Label>
                                            <Select
                                                options={Bloodgrpoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label>RH</Label>
                                            <Select
                                                options={BloodgrpRHoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >เบอร์โทร 1</Label>
                                            <Input type="number" name="PhoneNumber" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >เบอร์โทร 2</Label>
                                            <Input type="number" name="PhoneNumber2" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >เบอร์โทร 2</Label>
                                            <Input type="number" name="PhoneNumber3" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >เบอร์บ้าน</Label>
                                            <Input type="number" name="HomePhone" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >เบอร์ที่ทำงาน</Label>
                                            <Input type="number" name="WorkPhone" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label > E-mail</Label>
                                            <Input type="email" name="Email" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >ID Line</Label>
                                            <Input type="text" name="Line" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardBody>
                                <Row form inline>
                                    <FormGroup check inline>
                                        <Label> ประเภทผู้ป่วย </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" /> VIP
                                           
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label >
                                            <Input type="text" disabled/>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" /> Special Care
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label>
                                            <Input type="text" disabled/>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" /> Anonemous
                                        </Label>
                                    </FormGroup>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardHeader body className="text-left">
                                <h4> ข้อมูลบัตรอื่นๆ </h4>
                            </CardHeader>
                            <CardBody>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>ประเภทบัตร</Label>
                                            <Select
                                                options={Cardselectoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >เลขที่บัตร</Label>
                                            <Input type="text" name="Cardid" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label > วันที่เริ่ม</Label>
                                            <Input type="date" name="Cardstart" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >วันที่สิ้นสุด</Label>
                                            <Input type="date" name="Cardexpire" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className = " text-right"> 
                                    <Button color = "success"><i class="fas fa-plus"></i> เพิ่ม</Button>{' '}
                                    <Button outline color = "danger"><i class="fas fa-edit"></i> แก้ไข</Button>{' '}
                                    <Button outline color = "danger"><i class="fas fa-times"></i> ปิดใช้งาน</Button>{' '}
                                    <Button color = "danger"><i class="fas fa-trash-alt"></i> ลบ</Button>{' '}
                                </FormGroup>
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
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Ginformation;