import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface CardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

function CartaM(products: CardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={products.image} height={590} alt="product X" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        <ul id={products.id}>
          <p>{products.description}</p>
          <p>{products.price}</p>
        </ul>
      </Text>

      <Button variant="light" color="dark" fullWidth mt="md" radius="md">
        Details
      </Button>
    </Card>
  );
}

export default CartaM;
