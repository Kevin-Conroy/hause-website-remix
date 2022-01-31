/*function Home() {
  return (
    <div>
      <div>
        <h1>DAVE HAUSE</h1>
        <h3>Official website of Dave Hause</h3>
      </div>
        <h2>Latest News</h2>
      </div>
  );
}

export default Home;
*/

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

function Home() {
  const { hausenews } = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>The Latest</h1>
      </div>

      <ul className="post-list">
        {hausenews.map((newsItem) => (
          <div className="box">
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

export default Home;