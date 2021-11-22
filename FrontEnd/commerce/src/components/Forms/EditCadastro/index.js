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
import moment from 'moment';
import "./index.css";
import FormItem from "antd/lib/form/FormItem";

function EditCadastro() {

    return (
                <Row justify="space-around" align="middle"  style={{ background: "rgb(163, 95, 11)", padding: 45, justifyContent:"center", display:"flex", }}>
                    <Card className="viewRegistration" style={{ width: "20vw", padding: 30, background: "#fff",  }} bordered={false}>
                        <div className="sign-in-title"  >
                            <h2
                                style={{
                                    fontWeight: 600,
                                    paddingTop: 10,
                                    alignSelf: "start",
                                    textAlign: "center",
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
                                    <Form.Item >
                                        <Input
                                            value="João Victor Sampaio"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong>Data de Nascimento</strong>
                                    <Form.Item >
                                        <Input
                                            value="1999-12-02"
                                            type= "date"
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
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong>RG</strong>
                                    <Form.Item>
                                        <Input
                                            value="9999999999"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]}>
                                <Col flex={1}>
                                    <strong>E-mail</strong>
                                    <Form.Item>
                                        <Input 
                                          value="jv12@gmail.com"
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
                                            htmlType="submit"
                                            className="login-form-button"
                                            
                                        >
                                            CONCLUIR
                                        </Button>
                                    </FormItem>
                                </Col>

                            </Row>
                        </Form>

                    </Card>
                </Row>
    )
}

export default EditCadastro