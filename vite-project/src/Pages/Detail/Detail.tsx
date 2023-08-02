
import { useSelector } from "react-redux";
import { detailData } from "../../redux/detailSlice";
import { Title } from "@mantine/core";

interface DetailArticle {
  article: Article;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string
}
interface Article {
  id: string,
  title: string;
  price: string;
  description: string;
  image: string;
  category: string
}
const Detail = () => {
  const detailRdx: DetailArticle = useSelector(detailData);

  console.log("-----------------1")
  console.log(detailRdx)
  console.log("-----------------2")

  return (
    <div>
      <Title> {detailRdx.article.title}</Title>
      <img src={detailRdx.article.image} alt="{detailRdx.article.title}" />
      <p>{detailRdx.article.description}  </p>


      <p>{detailRdx.article.price}  </p>

      <p>{detailRdx.article.category}  </p>

    </div>
  );
}

export default Detail;