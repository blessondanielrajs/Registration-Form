import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Input,
  Button,
  PageHeader,
  message,
  Modal,
} from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "./App.less";

//class part state they holds the data this page
class App extends Component {
  state = {
    status: 0,
    Name: "",
    Email: "",
    Mobile: "",
    Country: "",
    City: "",
    State: "",
    Message: "",
  };

  onChangeInputBox1 = (e) => {
    this.setState({ Name: e.target.value });
  };

  onChangeInputBox2 = (e) => {
    this.setState({ Email: e.target.value });
  };

  onChangeInputBox3 = (e) => {
    this.setState({ Mobile: e.target.value });
  };

  onChangeInputBox4 = (e) => {
    this.setState({ Country: e.target.value });
  };

  onChangeInputBox5 = (e) => {
    this.setState({ City: e.target.value });
  };

  onChangeInputBox6 = (e) => {
    this.setState({ State: e.target.value });
  };

  onChangeInputBox7 = (e) => {
    this.setState({ Message: e.target.value });
  };

  login = () => {
    let flag = 0;
    const regex_pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.state.Name === "") {
      message.error("Please Enter Name");
      flag = 1;
      return false;
    }
    if (regex_pattern.test(this.state.Email)) {
      console.log("The email address is valid");
    } else {
      console.log("The email address is not valid");
      message.error("The email address is not valid");

      return false;
      flag = 1;
    }

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <PageHeader className="site-page-header" title="Register Form" />
        <Card style={{ width: "100%", marginTop: "10%" }} bordered type="inner">
          <Row gutter={[16, 16]} align="middle">
            <Col span={10}>
              <Input placeholder="Name" onChange={this.onChangeInputBox1} />
            </Col>
            <Col span={10}>
              <Input placeholder="Email" onChange={this.onChangeInputBox2} />
            </Col>
            <Col span={10}>
              <Input placeholder="Mobile" onChange={this.onChangeInputBox3} />
            </Col>
            <Col span={10}>
              <Input placeholder="Country" onChange={this.onChangeInputBox4} />
            </Col>
            <Col span={10}>
              <Input placeholder="City" onChange={this.onChangeInputBox5} />
            </Col>
            <Col span={10}>
              <Input placeholder="State" onChange={this.onChangeInputBox6} />
            </Col>
            <Col span={10}>
              <Input placeholder="Message" onChange={this.onChangeInputBox7} />
            </Col>

            <Col span={8}>
              <Button type="primary" onClick={this.login}>
                Submit
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
