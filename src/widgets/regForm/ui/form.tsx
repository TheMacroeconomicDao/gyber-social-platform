import { useRouter } from 'next/navigation'
import { Form, Input, Button, message } from "antd";
import { SendRegDataProps } from "../models";

export const RegistrationForm = () => {
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage()

  const open = () => {
      messageApi.open({
        key: 'loadingWithSuccess',
        type: 'loading',
        content: '⌛ Loading...',
      });

      router.push('/homePage')

      setTimeout(() => {
        messageApi.open({
          key: 'loadingWithSuccess',
          type: 'success',
          content: '✅ Success!',
          duration: 2,
        });
      }, 2000)
  };

  const error = () => {
      messageApi.open({
        type: 'error',
        content: '❌Damn, something went wrong..',
      });
  };

  const onSendRegData = (values: SendRegDataProps) => {
    let test = values.password === '42' && values.username === 'test'
    
    return test ? open() : error()
  };

  return (
    <>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onSendRegData}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input 
            placeholder="Username"
            size='large' 
            />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            placeholder="Password"
            size='large' 
          />
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit"
            size='middle'
        >
            Log in
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};