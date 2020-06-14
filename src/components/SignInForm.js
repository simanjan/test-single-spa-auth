import React from "react";
import { Form, Input, Button, Checkbox, signIn } from "@extrascript/components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignInForm = () => {
  const [form] = Form.useForm();

  // const [authToken, setAuthToken] = React.useState(null);

  const onFinish = (values) => {
    // TODO: should re-render page on success
    signIn(values.username, values.password);

    // eslint-disable-next-line no-console
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="sign-in"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
