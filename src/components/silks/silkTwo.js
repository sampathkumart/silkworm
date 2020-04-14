import React from 'react';
import { Form, Input, Button, } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};


const SilkTwo = () => {
    return (

        <Form {...layout} name="nest-messages">
            
            <Form.Item
                label="New User"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Name:"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label=" Mobile Number"
                type="number"
            >
                <Input />
            </Form.Item>
            <Form.Item label="Address">
                <Input />
            </Form.Item>
            <Form.Item label="Location">

            </Form.Item>
            <Form.Item label="Group">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>

    );
};

export default SilkTwo;