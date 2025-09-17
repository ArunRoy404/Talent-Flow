'use client'
import { toast } from 'sonner';
import { Form, Input, Button } from "antd";
import { useForm } from 'antd/es/form/Form';

const ContactForm = () => {
    const [form] = Form.useForm()
    const handleSubmit = () => {
        toast('Your message has been sent!')
        form.resetFields()
    };


    return (
        <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">
                Send Us a Message
            </h2>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                >
                    <Input placeholder="Your Name" className="!rounded-lg" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                    ]}
                >
                    <Input placeholder="Your Email" className="!rounded-lg" />
                </Form.Item>

                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: "Please enter your message" }]}
                >
                    <Input.TextArea
                        rows={5}
                        placeholder="Your Message"
                        className="!rounded-lg"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="!bg-primary !text-secondary !border-none !px-6 !py-3 !rounded-lg"
                    >
                        Send Message
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactForm;