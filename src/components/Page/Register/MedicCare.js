import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, FormGroup, Label } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Select from 'react-select';

const columns1 = [{
    dataField: 'id',
    text: 'contact',
    sort: true
}, {
    dataField: 'tutelage',
    text: 'ความคุ้มครอง',
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
    text: 'สิทธิที่มีทั้งหมด',
    sort: true
}, {
    dataField: 'contact',
    text: 'ใช้ประจำ',
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

const rows1 = [{ id: 'TEst', tutelage: '999' }];
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

const RightCareoption = [
    { value: 'กองทุนทดเเทน', label: 'กองทุนทดเเทน' },
    { value: 'ข้าราชการชำระเอง', label: 'ข้าราชการชำระเอง' },
    { value: 'ชำระเอง', label: 'ชำระเอง' },
    { value: 'บริษัทคู่สัญญา', label: 'บริษัทคู่สัญญา' },
    { value: 'บริษัทประกันชีวิต', label: 'บริษัทประกันชีวิต' },
    { value: 'เบิกจ่ายตรง  กรม  บช กลาง', label: 'เบิกจ่ายตรง  กรม  บช กลาง' },
    { value: 'เบิกจ่ายตรง กรุงเทพมหานคร', label: 'เบิกจ่ายตรง กรุงเทพมหานคร' },
    { value: 'เบิกจ่ายตรง กสทช ', label: 'เบิกจ่ายตรง กสทช' },
    { value: 'ปสก รพ มทส', label: 'ปสก รพ มทส' },
    { value: 'ปสก รพ อื่นๆ', label: 'ปสก รพ อื่นๆ' },
    { value: 'พรบ', label: 'พรบ' },
    { value: 'มหาวิทยาลัยเทคโนโลยีสุรนารี', label: 'มหาวิทยาลัยเทคโนโลยีสุรนารี' },
    { value: 'รัฐวิสาหกิจ', label: 'รัฐวิสาหกิจ' }
];

export default class MedicCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RightCare:"", //สิทธิรักษา
           
            
};

    }
    render() {
        return (
            <div>
                <Row>
                    <Col sm="6">
                        <Card style={{height:"95%"}}>
                            <CardHeader body className="text-left">
                                <h5> ประเภทสิทธิ </h5>
                            </CardHeader>
                            <CardBody>
                                <Row form>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Select
                                                options={RightCareoption} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card style={{height:"95%"}}>
                            <CardHeader body className="text-left">
                                <h5> สิทธิรักษาทั้งหมด </h5>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <h5> สิทธิคนไข้ทั้งหมด </h5>
                <ToolkitProvider
                    keyField="id"
                    data={rows2}
                    columns={columns2}
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
            </div>
        );
    }
}