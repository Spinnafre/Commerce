import React from "react";
import {
    Row,
    Col,
    Button,
    Card,
    Input,
    Divider,
    Form,
} from "antd";
import "./index.css";
import FormItem from "antd/lib/form/FormItem";

function ViewCadastro() {

    return (
                <Row justify="space-around" align="middle"  style={{ background: "rgb(163, 95, 11)", padding: 45, justifyContent:"center", display:"flex", }}>
                    <Card className="viewRegistration" style={{ width: "20vw", padding: 30, background: "#fff",  }} bordered={false}>
                        <div className="sign-in-title"  >
                            <h2
                                style={{
                                    fontWeight: 600,
                                    paddingTop: 10,
                                    alignSelf: "start",
                                    textAlign:"center",
                                }}
                            >
                                Seus Dados
                            </h2>
                        </div>
                        <Divider />
                        <Form
                          initialValues={{ remember: true }}
                        >
                            <Row gutter={[40, 20]} >
                                <Col flex={35}>
                                    <strong>Nome Completo</strong>
                                    <Form.Item>
                                        <Input
                                           value="João Victor Sampaio"
                                           disabled 
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong>Data de Nascimento</strong>
                                    <Form.Item>
                                        <Input
                                            value="02/12/1999"
                                            disabled                                            
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]} >
                                <Col flex={1}>
                                    <strong>CPF</strong>
                                    <Form.Item>
                                        <Input
                                            value="999999999999"
                                            disabled 
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong>RG</strong>
                                    <Form.Item>
                                        <Input
                                            value="9999999999"
                                            disabled 
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]}>
                                <Col flex={1}>
                                    <strong>E-mail</strong>
                                    <Form.Item >
                                        <Input 
                                          value="jv12@gmail.com"
                                          disabled 
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="end" gutter={[40, 16]}>
                                <Col>
                                    
                                <Button type="link">VOLTAR</Button>
                                    
                                </Col>
                                <Col>
                                    <FormItem>
                                        <Button
                                            type="primary"
                                            htmlType="link"
                                            className="login-form-button"
                                            
                                        >
                                            EDITAR
                                        </Button>
                                    </FormItem>
                                </Col>

                            </Row>
                        </Form>

                    </Card>
                </Row>
    )
}

export default ViewCadastro
