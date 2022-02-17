import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const newsitem = await db.hausenews.findUnique({
    where: { id: params.newsItemId },
  });
  if (!newsitem) throw new Error("Article not found");
  const data = { newsitem };
  return data;
};
function NewsItem() {
  const { newsitem } = useLoaderData();

  return (
    <div className="rcorners1">
      <div>
      <div className="box">
        <h2>{newsitem.title}</h2>
        </div>
      </div>
      <div>
        <p>{newsitem.body}</p>
      </div>
    </div>
  );
}

export default NewsItem;
