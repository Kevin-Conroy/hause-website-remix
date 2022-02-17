import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const data = {
    hausenews: await db.hausenews.findMany({
      take: 10,
      select: { id: true, title: true },
    }),
  };
  return data;
};

function NewsItems() {
  const { hausenews } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>News</h1>
      </div>

      <ul className="group">
        {hausenews.map((newsItem) => (
          <div className="rcorners1">
            <li key={newsItem.id}>
              <Link to={newsItem.id}>
                <h3>{newsItem.title}</h3>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default NewsItems;
