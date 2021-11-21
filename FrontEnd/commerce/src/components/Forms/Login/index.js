import React, { useState } from "react";
import {
  Button,
  Row,
  Form,
  Checkbox,
  Card,
  Divider,
  Input,
} from "antd";

import {
  KeyOutlined,
  InfoCircleOutlined,
  UserOutlined
} from "@ant-design/icons";


import "./index.css";

function signin() {  
  return (
        <Row justify="space-around" align="middle" style={{  background: "rgb(163, 95, 11)", padding: 50, justifyContent:"center", display:"flex", }}>
          <Card className="sign-in" style={{width: "25vw",  background: "#fff", }}>
            <div className="sign-in-title" >
              <h2
                style={{
                  color: "#2D4040",
                  fontWeight: 600,
                  paddingTop: 20,
                }}
              >
                {" "}
                Tela de Login
              </h2>
              <p>
                Preencha as informações abaixo para continuar:
              </p>
            </div>
            <Divider />
            <Form >
              <Form.Item
                name="email"
                rules={[
                    {
                      type: 'email',
                      message: 'Por favor, insira um email válido!',
                  },
                  {
                      required: true,
                      message: 'Por favor, insira seu email!',
                  },
                ]}
              >               
                  <Input
                    placeholder="Insira seu Email"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <InfoCircleOutlined style={{ color: 'rgba(0, 0,0,.45)' }} />
                    }
                  />          
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Por favor, insira sua senha!" },
                  {
                    type: "string",
                    min: 6,
                    message: "Por favor, insira uma senha válida!",
                  },
                ]}
              >
                <Input.Password placeholder="Insira sua Senha"
                  type="password"
                  prefix={<KeyOutlined />}
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" style={{textAlign: "center"}} >
                <Checkbox >Lembrar-me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ height: "45px" }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Entrar
                </Button>
                <Button type="link" className="login-form-button" style={{ height: "45px", marginTop: "5px"}}>Ainda não sou cliente</Button>
              </Form.Item>
              <Form.Item>
                <p style={{ textAlign: "center" }}>
                  Esqueceu sua senha?
                  <br />
                  <Button type="link">Recuperar Acesso</Button>
                </p>
              </Form.Item>
            </Form>
          </Card>
          </Row>
  );
}

export default signin;