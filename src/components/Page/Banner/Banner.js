import React from 'react';
import {Row, Col,Button,Card, CardHeader, CardBody,Label,Input,Form,FormGroup,CardFooter} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import '../Banner/Banner.css';


const columns1 = [{
  dataField: 'id',
  text: 'Billing',
  sort: true
  
}, {
  dataField: 'right1',
  text: 'right1',
  sort: true
}, {
  dataField: 'right2',
  text: 'right2',
  sort: true
}, {
  dataField: 'Payment',
  text: 'ชำระเงินเอง',
  sort: true
}, {
  dataField: 'Total',
  text: 'Total',
  sort: true
}];

const { SearchBar } = Search;

const rows1 = [{ id: 1, right1: 'test test',right2: '102', Payment: 'TEst',Total:'1200' },
              { id: 2, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 3, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 4, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 5, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 6, right1: 'Tanya', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 7, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 8, right1: 'Tanya', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 9, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 10, right1: 'Tanya', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 11, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 12, right1: 'Tanya', right2: '999', Payment: 'TEst',Total:'1200'},
              { id: 13, right1: 'Nopza', right2: '999', Payment: 'TEst',Total:'1200' },
              { id: 14, right1: 'Tanya', right2: '999', Payment: 'TEst' ,Total:'1200'}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: []
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total"> &nbsp;
    Showing { from } to { to } of { size } Results
  </span>
);

const options = {
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true,
  withFirstAndLast: false,
  hidePageListOnlyOnePage: true, 
  firstPageText: '<<',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [ {
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: rows1.length
  }] 
};

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      showing: true ,
      hidden: true,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }


  render() {
    
    const { showing } = this.state;
    const { hidden } = this.state;
    return (
      <div className="container-fluid">
        <Row>
              <Col sm={12}>
                <Card >
                  <CardHeader tag="h5" body className="text-left" >Patient Info</CardHeader>
                    <CardBody body className="text-left" >
                      
                              <Row >
                                <Col sm={2}>
                                  <div className="imgBanner">
                                    {/* <img src = {cc2} alt = "expic"/>  */}
                                  </div>
                                </Col>
                                <Col sm={6}>
                                  <Row form>
                                    <Col sm= {12}>
                                      <Form >
                                        <FormGroup row>
                                        <Label  className=" mt-2 mr-sm-2"> ชื่อ: </Label>
                                          <Col sm={4}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                          <Label  className=" mt-2 mr-sm-2"> HN: </Label>
                                          <Col sm={4}>
                                            <Input type="text" name="password"  readOnly={true} disabled/>
                                          </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                        <Label  className=" mt-2 mr-sm-2"> DOB: </Label>
                                          <Col sm={2}>
                                            <Input type="text" name="password"  readOnly={true} disabled/>
                                          </Col>
                                          <Label  className=" mt-2 mr-sm-2"> Age: </Label>
                                          <Col sm={2}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                          <Label className=" mt-2 mr-sm-2"> Sex: </Label>
                                          <Col sm={2}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                          <Label className=" mt-2 mr-sm-2"> Tel: </Label>
                                          <Col sm={4}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                        <Label className=" mt-2 mr-sm-2"> Nationality: </Label>
                                          <Col sm={2}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                          <Label className=" mt-2 mr-sm-2"> Religion: </Label>
                                          <Col sm={2}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                          <Label  className=" mt-2 mr-sm-2"> Identification Number: </Label>
                                          <Col sm={3}>
                                            <Input type="text" name="password" readOnly={true} disabled/>
                                          </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                        <Label  className=" mt-2 mr-sm-2"> Address: </Label>
                                          <Col sm={11}>
                                            <Input type="text" name="password"  readOnly={true} disabled/>
                                          </Col>
                                        </FormGroup>
                                      </Form>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col sm={1}>
                                  <FormGroup row className = "text-center">
                                    <Col sm={12}>
                                      <div class="p-5 mb-1  bg-success text-black"><big><b> A </b></big></div>
                                      <FormGroup >
                                        <Button type = "button" color="secondary" block> View </Button>
                                      </FormGroup>
                                    </Col>
                                  </FormGroup>
                                </Col>
                                <Col sm={3}>
                                <FormGroup row>
                                  <Label for="exampleEmail" className=" mt-2 mr-sm-2"> วันที่ลงประวัติการเเพ้: </Label>
                                    <Col sm={4}>
                                      <Input type="text" name="password" readOnly={true} disabled/>
                                    </Col>
                                    <Col sm={4}>
                                      <Input type="text" name="password"  readOnly={true} disabled/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleEmail" className=" mt-2 mr-sm-2"> <b> ไม่มีประวัติการเเพ้ยาใดๆ </b></Label>
                                </FormGroup>
                                </Col>
                              </Row>
                              <hr/>

                              <Row >
                                <Col sm={12}>
                                  <Row form>
                                    <Col sm= {12}>
                                      <Col sm= {12}>
                                        <Form >
                                          <FormGroup row>
                                          <Label for="exampleEmail" className=" mt-2 mr-sm-2"> VN: </Label>
                                            <Col sm={1}>
                                              <Input type="text" name="password"  readOnly={true} disabled/>
                                            </Col>
                                            <Label for="exampleEmail" className=" mt-2 mr-sm-2"> Date: </Label>
                                            <Col sm={1}>
                                              <Input type="text" name="password"  readOnly={true} disabled/>
                                            </Col>
                                            <Label for="exampleEmail" className=" mt-2 mr-sm-2"> Time: </Label>
                                            <Col sm={1}>
                                              <Input type="text" name="password"  readOnly={true} disabled/>
                                            </Col>
                                            <Label for="exampleEmail" className=" mt-2 mr-sm-2"> Doctor: </Label>
                                            <Col sm={2}>
                                              <Input type="text" name="password"  readOnly={true} disabled/>
                                            </Col>
                                            <Label for="exampleEmail" className=" mt-2 mr-sm-2"> Location: </Label>
                                            <Col sm={2}>
                                              <Input type="text" name="password"  readOnly={true} disabled/>
                                            </Col>
                                            <Button color="success"><i class="far fa-address-book"></i>  Note </Button>{' '}
                                          </FormGroup>
                                        </Form>
                                      </Col>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <hr/>
                        <Row>
                          <Col sm="11" >
                            <div className =" cardbtl" style={{ display: (showing ? 'none' : 'block') }}>
                                <Row>
                                  <Col sm="12" >
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
                                            selectRow={ selectRow }
                                            hover={true}
                                            pagination={ paginationFactory( options ) }
                                              {...props.baseProps}
                                            />
                                          </div>
                                        )
                                      }
                                    </ToolkitProvider>
                                    <br/>
                                    <FormGroup className="text-left"> 
                                      <Button type="button" color="secondary" > SUM </Button>{' '}
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                          </Col>
                          <Col sm="1">
                            <FormGroup className="text-left"> 
                              <Button color="primary" onClick={() => this.setState({ hidden: !hidden ,showing:!showing})}> ย่อ/ขยาย </Button>{' '}
                            </FormGroup>
                          </Col>
                        </Row>
                        <div className="text-right">
                          <Button color="primary"><i class="fas fa-plus-circle"></i>  Add Order </Button>{' '}
                          <Button color="danger"><i class="fas fa-edit"></i>  Edit Right </Button>{' '}
                          <Button color="success"><i class="fas fa-pencil-alt"></i>  Edit Billing </Button>{' '}
                          <Button color="primary"><i class="fas fa-print"></i>  Print </Button>{' '}
                          <Button color="success"><i class="far fa-money-bill-alt"></i>  Payment </Button>{' '}
                        </div>
                    </CardBody>
                    
                  </Card>
                </Col>
              </Row>
        </div>
    );
  }
}
