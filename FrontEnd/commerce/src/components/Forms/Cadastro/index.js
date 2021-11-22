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

function Cadastro() {

    return (
                <Row justify="space-around" align="middle"  style={{ background: "rgb(163, 95, 11)", padding: 45, justifyContent:"center", display:"flex", }}>
                    <Card className="viewRegistration" style={{ width: "30vw", padding: 30, background: "#fff",  }} bordered={false}>
                        <div className="sign-in-title"  >
                            <h2
                                style={{
                                    fontWeight: 600,
                                    paddingTop: 10,
                                    alignSelf: "start",
                                }}
                            >
                                Realizar cadastro
                            </h2>
                            <p style={{ alignSelf: "start", fontWeight: 700, }}>
                                Preencha as informações abaixo para continuar:
                            </p>
                        </div>
                        <Divider />
                        <Form
                          initialValues={{ remember: true }}
                        >
                            <Row gutter={[40, 20]} >
                                <Col flex={35}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>Nome Completo</strong>
                                    <Form.Item
                                        name="nome"
                                        rules={[
                                            { required: true, message: "Por favor, insira seu nome!" },
                                            {
                                                type: "string",
                                                message: "Por favor, insira um nome válido",
                                            }
                                        ]}
                                    >
                                        <Input
                                            placeholder="Insira seu nome"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>Data de Nascimento</strong>
                                    <Form.Item
                                        name="dataNascimento"
                                        rules={[
                                            { required: true, message: "Por favor, insira sua data de nascimento!" },
                                            {
                                                type: "string",
                                                message: "Por favor, insira uma data válida",
                                            }
                                        ]}
                                    >
                                        <Input
                                            placeholder=""
                                            type="date"
                                            
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]} >
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>CPF</strong>
                                    <Form.Item
                                        name="cpf"
                                        rules={[
                                            { required: true, message: "Por favor, insira seu CPF!" },
                                            {
                                                type: "string",
                                                min: 11,
                                                max: 11,
                                                message: "Por favor, insira um CPF válido!",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Insira seu CPF"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>RG</strong>
                                    <Form.Item
                                        name="rg"
                                        rules={[
                                            { required: true, message: "Por favor, insira seu RG!" },
                                            {
                                                type: "string",
                                                message: "Por favor, insira um RG válido",
                                            }
                                        ]}
                                    >
                                        <Input
                                            placeholder="Insira seu RG"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]}>
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>E-mail</strong>
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
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>Confirmar E-mail</strong>
                                    <Form.Item
                                        name="confirmEmail"
                                        dependencies={['email']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, confirme seu email!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('email') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Os dois emails não coincidem!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[40, 16]} >
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>Senha</strong>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira sua senha!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </Col>
                                <Col flex={1}>
                                    <strong><span style={{ color: '#F05152', marginRight: 4 }}>*</span>Confirmar Senha</strong>
                                    <Form.Item
                                        name="confirmPassword"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, confirme sua senha!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('As duas senhas não coincidem!'));
                                                },
                                            }),
                                        ]}
                                    >

                                        <Input.Password />
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

export default Cadastro