import { useToggle, upperFirst } from "@mantine/hooks";
import "./Login.css";
import { addUser, loginUser } from "../../Common/Services/apicalls";
import { useForm } from "@mantine/form";
import { ILoginData, IUserData } from "../../Common/Services/IUserInterface";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import {
  GoogleButton,
  TwitterButton,
} from "../../Components/SocialButtons/SocialButtons";

interface User {
  name : string,
  email : string,
  password : string
}


export function Login(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const executeForm =()=>{
    switch (type) {
      case "login":
        let userLogin: ILoginData={
          username : form.values.email,
          password: form.values.password,
        }
        loginUser(userLogin)
        console.log(type)
        
        break;
      case "register":
        let userRegister : IUserData ={
          email : form.values.email,
          username: form.values.email,
          password: form.values.password,
          name:{
            firstname : "hola", 
            lastname:""
          },
          address: {
            city : "España",
            street : "123",
            number : 4,
            zipcode:"1234"
          },
          phone: "123456"
        }
        addUser(userRegister)
        console.log(type)
        break;
    
      default:
        break;
    }
  }
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => executeForm())}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
