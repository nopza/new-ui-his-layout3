import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Row, Col,Button,Card, CardHeader, CardBody,Modal, 
          ModalHeader, ModalBody, ModalFooter, Input,Form,FormGroup,Label } from 'reactstrap';
import { AvField,AvForm ,AvCheckboxGroup,AvCheckbox,AvRadioGroup,AvRadio} from 'availity-reactstrap-validation';
// import CameraGG from './CameraGG';

import {Helmet} from "react-helmet";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import Ginformation from './Ginformation';
import Ainformation from './Ainformation';
import Pinformation from './Pinformation';
import Cinformation from './Cinformation';
import Binformation from './Binformation';
import CameraGG from '../Sendpatient/CameraGG';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      disabled: false,

    }

    this.state = {
                    Search:"",
                    PatientFullName: '' , //ชื่อภาษาไทย
                    PatientFullNameEN: '' , //ชื่อภาษาอังกฤษ
                    Birthdate: '' , //วันเกิด
                    Age: '' , //อายุ
                    PhoneNumber: '' , //เบอร์โทร
                    Address: '' , //ที่อยู่
                    RaceUID: '' , //เชื่อชาติ
                    NALTYUID: '' , //สัญชาติ
                    RELGNUID: '' , //ศาสนา
                    NationalID: '' , //เลขบัตรประชาชน
                    Symptom: '' , //อาการ
                    SendTo: '' , //ส่งไปที่
                    SendToO: '' , //ส่งไปที่2
                    Doctor: '' , //แพทย์
                    Service: '' , //บริการ
                    Amount: '', //จำนวน
                    Amount2: '', //จำนวน2
                    SB: '', //เบิกค่ารักษา
                    NoteOfLeave:'', //ใบลา
                    SBNL: '', //เบิกค่ารักษาเเละใบลา
                    COMA :'', //ใบรับรองยานอกบัญชี  
                    ClaimSlip: '',  //ใบเคลม
                    Other:'', //อื่นๆ
                    Specify:'', //ระบุ
                    Mark:'', //หมายเหตุ
                    PrintVisitSlip:'', //พิมพ์ใบvisit
                    Thai:'' ,//ภาษาไทย
                    Eng: '' ,//ภาษาอังกฤษ
                   
    };
    this.toggle = this.toggle.bind(this);
  }

  handleEnableField() {
    this.setState( {
      disabled: !this.state.disabled} )
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="wrapper">
       <Header />
              <div className = "container">
                <Helmet>
                  <meta charSet="utf-8" />
                  <title> HIS | Register </title>
                </Helmet>
                
                <Row>
                    <Col md="12" >
                        <Card >
                            <CardHeader tag="h5" body className="text-left"> 
                            <h4> ทะเบียนผู้ป่วย </h4> 
                            </CardHeader> 
                                <CardBody>
                                {/* ค้นหา */}
                                <Card>
                                    <CardBody> 
                                    <Form >
                                        <Row >
                                          <Col md={8}>
                                              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                              <h3> Hospital  Number : </h3><br/>
                                              <Input type="text" name="Search" bsSize="sm" />
                                              </FormGroup>
                                              <br/>
                                              <Button type = "button" color = "success" ><i class="fas fa-search"></i></Button>{' '}
                                          </Col>
                                          <Col md={1}>
                                            <Label className="mt-3"><br/><br/><br/></Label><br/><br/>
                                            <Button color="primary" onClick={this.toggle}><i class="fas fa-camera"></i></Button>{' '}
                                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                                              <ModalHeader> Picture Capture </ModalHeader>
                                                <ModalBody>
                                                  <CameraGG />
                                                </ModalBody>
                                                <ModalFooter>
                                                  <Button color="success" onClick={this.toggle}> OK </Button>{' '}
                                                  </ModalFooter>
                                            </Modal>
                                          </Col>
                                          <Col md={3}>
                                            <div className="imgPreview">
                                              
                                            </div>
                                          </Col>
                                        </Row>
                                    </Form>
                                    </CardBody>
                                </Card>

                                {/* ข้อมูลทั่วไป */}
                                <Ginformation/>

                                {/* ข้อมูลที่อยู่ */}
                                <Ainformation/>

                                {/* ข้อมูลสิทธิรักษา */}
                                <Pinformation/>

                                {/* ข้อมูลการเปลี่ยนชื่อ-สกุล */}
                                <Cinformation/>

                                {/* สังกัดหน่วยงานและสวัสดิการ */}
                                <Binformation/>
                                
                                <br/>
                          <FormGroup className = " text-right"> 
                            <Button color = "success"><i class="fas fa-save"></i> บันทึก</Button>{' '}
                            <Button color = "danger"><i class="fas fa-trash-alt"></i> ลบรายการ</Button>{' '}
                            <Button outline color = "danger"><i class="fas fa-times"></i> ยกเลิก</Button>{' '}
                          </FormGroup>
                        </CardBody>
                        
                    </Card>
                  </Col>
                </Row>
              </div>
              <Footer />
              <ScrollUpButton 
                StopPosition={0}
                howAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}} />
      </div>
    );
  }
}

export default Register;
  