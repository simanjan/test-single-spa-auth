import React from "react";
// import { Form, Input, Button, Checkbox } from "@extrascript/components";
//
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 8 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };
//
// const SignInForm = () => {
//   const onFinish = (values) => {
//     // eslint-disable-next-line no-console
//     console.log("Success:", values);
//   };
//
//   const onFinishFailed = (errorInfo) => {
//     // eslint-disable-next-line no-console
//     console.log("Failed:", errorInfo);
//   };
//
//   return (
//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: "Please input your username!" }]}
//       >
//         <Input />
//       </Form.Item>
//
//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: "Please input your password!" }]}
//       >
//         <Input.Password />
//       </Form.Item>
//
//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>
//
//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
//
// export default function Root(props) {
//   return <SignInForm />;
// }

export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}
