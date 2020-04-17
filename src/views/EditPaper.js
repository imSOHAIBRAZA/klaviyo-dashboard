
import React from "react";
// react plugin used to create google maps
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner'
import { handleServerErrors } from "utils/errorHandler";
import user from '../services/api';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";


class EditPaper extends React.Component {

  state = {
    
    title: '',
    url:'',
    year:'',
    abstract:'',
    isLoding: false
  }
  componentDidMount(){
    // console.log('ID:<<>',this.props.match.params.id)
   this.setState({isLoding:true},()=>{
    user.getPaper(this.props.match.params.id).then(response => {
      // loder false ka code 
      // console.log('GET A PAPER RES:++>',response.data)
      this.setState({ 
        isLoding: false,
        // modal : !this.state.modal,
        id: response.data.id,
        title: response.data.title,
        url: response.data.url,
        year: response.data.year,
        abstract:response.data.abstract
       })

    }).catch(error => {
      this.setState({ isLoding: false })
      handleServerErrors(error, toast.error)
      
      
    })
   })
  }

  handleChange = e => {
    let getValue = e.target.value;
    let getName = e.target.name;
    this.setState(() => ({ [getName]: getValue }))
  };

  _handleSubmit = e => {
    e.preventDefault();
      let data = {
        title: this.state.title,
        url: this.state.url,
        year: this.state.year,
        abstract: this.state.abstract,
      };

      this.setState({ isLoding: true },()=>{
        user.updatePaper(data,this.state.id).then(response => {
          toast.success("Update Papaer !", {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 2000
           });
           this.setState({isLoding: false , title:'', url:'',year:'',abstract:'' })
            this.props.history.push("/admin/view-paper");

         }).catch(error => {
           this.setState({ isLoding: false })
           // console.log(error)
           handleServerErrors(error, toast.error)
           
         })
      })

  };


  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
             <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Edit Paper</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  {this.state.isLoding ? 
                  (<div className="text-center" style={{padding:'20px'}}>
                         <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                   </div>)
                  
                  :
                  <Form onSubmit={this._handleSubmit} method="post">
                    <h6 className="heading-small text-muted mb-4">
                      Edit Paper information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Title
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              name="title" value={this.state.title} onChange={this.handleChange} 
                              placeholder="Title"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              URL
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              name="url" value={this.state.url} onChange={this.handleChange} 
                              placeholder="https://www.zyz.com"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Year
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lucky"
                              id="input-first-name"
                              name="year" value={this.state.year} onChange={this.handleChange} 
                              placeholder="Year"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Abstract
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              name="abstract" value={this.state.abstract} onChange={this.handleChange} 
                              placeholder="Abstract"
                              // className="form-control-alternative"
                              rows="10"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                   <Button color="primary" type="submit"> Update </Button>
                  </Form>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EditPaper;
