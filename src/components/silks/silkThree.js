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


const SilkThree = () => {
    return (
        <Form {...layout} name="nest-messages">
            <Form.Item
                label="Receipt No:"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Farmer Detail:"
            >
                <Input />
            </Form.Item>
            <Form.Item

                label=" Mobile Number"
                type="number"
            >
                <Input />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Lot No">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Egg Laying Date">
                <Input />
            </Form.Item>
            <Form.Item label="Young Warm Rising Transport Charges">
                <Input />
            </Form.Item>
            <Form.Item label="Others">
                <Input />
            </Form.Item>
            <Form.Item label="Box">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Pending Amount">
                <Input />
            </Form.Item>
            <Form.Item label="Invoice No">
                <InputNumber />
            </Form.Item>
            
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>

    );
};

export default SilkThree;

