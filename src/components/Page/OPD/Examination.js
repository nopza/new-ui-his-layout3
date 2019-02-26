import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const columns1 = [{
    dataField: 'id',
    text: 'วันที่รับบริการ',
    sort: true
    
  }, {
    dataField: 'symptom',
    text: 'อาการสำคัญ',
    sort: true
  }, {
    dataField: 'authority',
    text: 'สิทธิรักษา',
    sort: true
  }, {
    dataField: 'doctor',
    text: 'Doctor',
    sort: true
  } ,{
    dataField: 'location',
    text: 'Location',
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
  }];
  
  const columns3 = [{
    dataField: 'id',
    text: '',
    sort: true
    
  }, {
    dataField: '2',
    text: '',
    sort: true
  }, {
    dataField: '3',
    text: '',
    sort: true
  }
  , {
    dataField: '4',
    text: '',
    sort: true}
    , {
    dataField: '5',
    text: '',
    sort: true
  }];
  
  
  const { SearchBar } = Search;
  
   const rows1 = [{ id: '01/01/2562 16:00', symptom: 'Tanya', authority: '999', doctor: 'TEst', location: 'TEst' }];
  
  
  const rows2 = [{ id: 1, authority: 'test test', tutelage: '102', contact: 'TEst' },
                { id: 2, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 3, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 4, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 5, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 6, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
                { id: 7, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 8, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
                { id: 9, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 10, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
                { id: 11, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 12, authority: 'Tanya', tutelage: '999', contact: 'TEst' },
                { id: 13, authority: 'Nopza', tutelage: '999', contact: 'TEst' },
                { id: 14, authority: 'Tanya', tutelage: '999', contact: 'TEst' }];
  
  const rows3 = [{ id: ' ', piority: '', date: '', name: '' }];
  
  
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
      text: 'All', value: rows2.length
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
  const options3 = {
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
      text: 'All', value: rows3.length
    }] 
  };

class Examination extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
                <div className="container-fluid">
                
                        <div className="card">
                            <div data-role="splitter" className="h-100" data-gutter-size="10" data-min-sizes="100" data-split-sizes="30, 40,30">
                            <div className="d-flex flex-justify-center "> 
                                    
                                        <br/>
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
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    pagination={ paginationFactory(options2) }
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                                        
                                </div>
                                <div class="d-flex flex-justify-center"> 
                                    
                                        <br/>
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
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    pagination={ paginationFactory(options2) }
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                                        
                                </div>
                                <div class="d-flex flex-justify-center"> 
                                    
                                        <br/>
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
                                                    selectRow={ selectRow }
                                                    hover={true}
                                                    pagination={ paginationFactory(options2) }
                                                        {...props.baseProps}
                                                    />
                                                    </div>
                                                )
                                                }
                                            </ToolkitProvider>
                                        
                                </div>
                            </div>
                        </div>
                    
                
                </div>
                <Footer/>
                
            </div>
       );
    }
  }
  
export default Examination;