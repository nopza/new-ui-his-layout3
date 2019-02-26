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
    text: 'คำนำหน้า',
    sort: true

}, {
    dataField: 'symptom',
    text: 'ชื่อ',
    sort: true
}, {
    dataField: 'authority',
    text: 'สกุล',
    sort: true
}, {
    dataField: 'doctor',
    text: 'ที่อยู่',
    sort: true
}, {
    dataField: 'location',
    text: 'ความสัมพันธ์',
    sort: true
}, {
    dataField: 'location',
    text: 'เบอร์โทร',
    sort: true
}, {
    dataField: 'location',
    text: 'เบอร์บ้าน',
    sort: true
}, {
    dataField: 'location',
    text: 'เบอร์ที่ทำงาน',
    sort: true
}, {
    dataField: 'location',
    text: 'Priority',
    sort: true
}];

const { SearchBar } = Search;

const rows1 = [{ id: 'นางสาว', symptom: 'Tanya', authority: '999', doctor: 'TEst', location: 'TEst' }];

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
const TITLEUIDkinoption = [
    { value: 'นาย', label: 'นาย' },
    { value: 'นาง', label: 'นาง' },
    { value: 'นางสาว', label: 'นางสาว' }
];

const chwuidoption = [
    { value: 'บุรีรัมย์', label: 'บุรีรัมย์' },
    { value: 'นครราชสีมา', label: 'นครราชสีมา' },
    { value: 'หนองคาย', label: 'หนองคาย' },
    { value: 'จันทบุรี', label: 'จันทบุรี' },
    { value: 'ราชบุรี', label: 'ราชบุรี' }
];

const ampuidoption = [
    { value: 'เมือง', label: 'เมือง' }
];

const tmbuidoption = [
    { value: 'ในเมือง', label: 'ในเมือง' },
    { value: 'สุรนารี', label: 'สุรนารี' },
    { value: 'ลำปลายมาศ', label: 'ลำปลายมาศ' }
];

const TYPEAREAUIDoption = [
    { value: 'อาศัยอยู่นอกเขตรับผิดชอบเเละเข้ามารับบริการ', label: 'อาศัยอยู่นอกเขตรับผิดชอบเเละเข้ามารับบริการ' },
    { value: 'อาศัยอยู่ในเขตรับผิดชอบเเละเข้ามารับบริการ', label: 'อาศัยอยู่ในเขตรับผิดชอบเเละเข้ามารับบริการ' }
];

const Relateoption = [
    { value: 'พ่อ', label: 'พ่อ' },
    { value: 'เเม่', label: 'เเม่' },
    { value: 'พี่', label: 'พี่' },
    { value: 'น้อง', label: 'น้อง' },
    { value: 'ลุง', label: 'ลุง' },
    { value: 'ป้า', label: 'ป้า' },
    { value: 'น้า', label: 'น้า' }
];

const Impoption = [
    { value: '1', label: 'มากที่สุด' },
    { value: '2', label: 'มาก' }
];

class Ainformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        Addr: '' , //บ้านเลขที่
                        Moo: '' , //หมู่
                        tmbuid: '' , //ตำบล
                        ampuid: '' , //อำเภอ
                        chwuid: '' , //จังหวัด
                        RoadLane: '' , //ซอย ถนน
                        zipcode: '' , //รหัสไปรษณีย์
                        InformAddr: '' , //บ้านเลขที่ที่แจ้ง
                        InformMoo: '' , //หมู่ที่แจ้ง
                        InformTMBUID: '' , //ตำบลที่แจ้ง
                        InformAMPUID: '' , //อำเภอที่แจ้ง
                        InformCHWUID: '' , //จังหวัดที่แจ้ง
                        InformZipcode: '' , //ไปรษณีย์ที่แจ้ง
                        InformRoadLane: '' , //ซอย ถนนที่แจ้ง
                        TYPEAREAUID: '' , //สถานะบุคคล
                        TITLEUIDkin:"", //คำนำหน้า
                        Forenamekin: '' , //ชื่อ
                        Surnamekin: '' , //สกุล
                        Relate: '' , //ความสัมพันธ์
                        PhoneNumberkin: '' , //เบอร์โทร
                        HomePhonekin: '' , //เบอร์บ้าน
                        WorkPhonekin: '' , //เบอร์ที่ทำงาน
                        Imp: '' , //ลำดับความสำคัญ
                        kinAddr: '' , //บ้านเลขที่
                        kinMoo: '' , //หมู่
                        kintmbuid: '' , //ตำบล
                        kinampuid: '' , //อำเภอ
                        kinchwuid: '' , //จังหวัด
                        kinRoadLane: '' , //ซอย ถนน
                        kinzipcode: '' , //รหัสไปรษณีย์
        };
      }

    render() {
        return (
            <div>
                <Card >
                    <CardHeader  body className="text-left">
                        <h4> ข้อมูลที่อยู่ </h4>
                    </CardHeader>
                    <CardBody>
                        <Card >
                            <CardHeader body className="text-left">
                                <h4> ที่อยู่ตามทะเบียนบ้าน </h4>
                            </CardHeader>
                            <CardBody>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >บ้านเลขที่</Label>
                                            <Input type="number" name="Addr" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >หมู่ที่</Label>
                                            <Input type="number" name="Moo" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >ถนน/ซอย/หมู่บ้าน</Label>
                                            <Input type="text" name="RoadLane" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>จังหวัด</Label>
                                            <Select
                                                options={chwuidoption}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >อำเภอ</Label>
                                            <Select
                                                options={ampuidoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>ตำบล/เขต</Label>
                                            <Select
                                                options={tmbuidoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >รหัสไปรษณีย์</Label>
                                            <Input type="number" name="zipcode" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardHeader body className="text-left">
                                <FormGroup check inline>
                                    <h4> ที่อยู่ที่สามารถติดต่อได้ </h4> &nbsp;&nbsp;
                                        <Label check>
                                            <Input type="checkbox" /> Some input
                                        </Label>
                                </FormGroup>
                            </CardHeader>
                            <CardBody>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >บ้านเลขที่</Label>
                                            <Input type="number" name="InformAddr" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >หมู่ที่</Label>
                                            <Input type="number" name="InformMoo" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >ถนน/ซอย/หมู่บ้าน</Label>
                                            <Input type="text" name="InformRoadLane" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>จังหวัด</Label>
                                            <Select
                                                options={chwuidoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >อำเภอ</Label>
                                            <Select
                                                options={ampuidoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>ตำบล/เขต</Label>
                                            <Select
                                                options={tmbuidoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >รหัสไปรษณีย์</Label>
                                            <Input type="number" name="InformZipcode" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardBody>
                                <Row form inline>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>สถานะบุคคล</Label>
                                            <Select
                                                options={TYPEAREAUIDoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card >
                            <CardHeader  body className="text-left">
                                <h4> ญาติที่ติดต่อ </h4>
                            </CardHeader>
                            <CardBody>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label>คำนำหน้า</Label>
                                            <Select
                                                options={TITLEUIDkinoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >ชื่อ</Label>
                                            <Input type="number" name="Forenamekin" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >นามสกุล</Label>
                                            <Input type="number" name="Surnamekin" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >เกี่ยวข้องกับผู้ป่วย</Label>
                                            <Select
                                                options={Relateoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >เบอร์มือถือ</Label>
                                            <Input type="number" name="PhoneNumberkin" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >เบอร์บ้าน</Label>
                                            <Input type="number" name="HomePhonekin" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >เบอร์ที่ทำงาน</Label>
                                            <Input type="number" name="WorkPhonekin" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >ลำดับความสำคัญ</Label>
                                            <Select
                                                options={Impoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >บ้านเลขที่</Label>
                                            <Input type="number" name="kinAddr" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label >หมู่ที่</Label>
                                            <Input type="number" name="kinMoo" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >ถนน/ซอย/หมู่บ้าน</Label>
                                            <Input type="number" name="kinRoadLane" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>จังหวัด</Label>
                                            <Select
                                                options={chwuidoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >อำเภอ</Label>
                                            <Select
                                                options={ampuidoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>ตำบล/เขต</Label>
                                            <Select
                                                options={tmbuidoption} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label >รหัสไปรษณีย์</Label>
                                            <Input type="number" name="kinzipcode" />
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

export default Ainformation;