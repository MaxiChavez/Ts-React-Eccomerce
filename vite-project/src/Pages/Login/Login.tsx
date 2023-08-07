import { useToggle, upperFirst } from "@mantine/hooks";
import "./Login.css";
import {
  registerUser,
  loginUser,
  existsUser,
} from "../../Common/Services/userService";
import { useForm } from "@mantine/form";
import { ILoginData, IUserData } from "../../Common/Services/IUserInterface";
import {
  TextInput,
  PasswordInput,
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

export function Login(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);

  const executeForm = async () => {
    let userLogin: ILoginData;
    let userRegister: IUserData;
    switch (type) {
      case "login":
        userLogin = {
          username: form.values.email,
          password: form.values.password,
        };
        try {
          const usuario: IUserData[] = await loginUser(userLogin);
          if (usuario.length > 0) {
            console.log("login exitoso");
          } else console.log("login fallido");
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
        }
        console.log(type);
        break;
      case "register":
        userRegister = {
          email: form.values.email,
          password: form.values.password,
          name: form.values.name,
          address: {
            city: form.values.address.city,
            street: form.values.address.street,
            number: form.values.address.number,
            zipcode: form.values.address.zipcode,
          },
          phone: form.values.phone,
          rol: "u",
        };
        try {
          const existeElUsuario: boolean = await existsUser(form.values.email);
          if (existeElUsuario) {
            console.log("El usuario existe, no lo puedo crear.");
          } else {
            await registerUser(userRegister);
          }
        } catch (error) {
          console.error("Error al registrar el usuario:", error);
        }
        console.log(type);
        break;
      default:
        break;
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      address: {
        city: "",
        street: "",
        number: "",
        zipcode: "",
      },
      phone: "",
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
            <>
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                required
                label="City"
                placeholder="Málaga"
                value={form.values.address.city}
                onChange={(event) =>
                  form.setFieldValue("address.city", event.currentTarget.value)
                }
                error={form.errors.address && "Invalid address"}
                radius="md"
              />
              <TextInput
                required
                label="Calle"
                placeholder="Calle 123"
                value={form.values.address.street}
                onChange={(event) =>
                  form.setFieldValue(
                    "address.street",
                    event.currentTarget.value
                  )
                }
                error={form.errors.address && "Invalid address"}
                radius="md"
              />
              <TextInput
                required
                label="Numero"
                placeholder="1234"
                value={form.values.address.number}
                onChange={(event) =>
                  form.setFieldValue(
                    "address.number",
                    event.currentTarget.value
                  )
                }
                error={form.errors.address && "Invalid address"}
                radius="md"
              />
              <TextInput
                required
                label="Zipcode"
                placeholder="A1234B"
                value={form.values.address.zipcode}
                onChange={(event) =>
                  form.setFieldValue(
                    "address.zipcode",
                    event.currentTarget.value
                  )
                }
                error={form.errors.address && "Invalid address"}
                radius="md"
              />

              <TextInput
                required
                label="Phone"
                placeholder="1355433462"
                value={form.values.phone}
                onChange={(event) =>
                  form.setFieldValue("phone", event.currentTarget.value)
                }
                error={form.errors.phone && "Invalid phone"}
                radius="md"
              />
            </>
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
