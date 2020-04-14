import React from 'react';
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};

const Silk = () => {
    return (

        <Form {...layout} name="nest-messages">
            <Form.Item label="Invoice No">
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="Lot No:">
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="No.of Dfls"
            >
                <Input />
            </Form.Item>
            <Form.Item label="Rate">
                <Input />
            </Form.Item>
            <Form.Item label="Amount">
                <Input />
            </Form.Item>
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>

    );
};

export default Silk;