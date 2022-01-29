import { useLoaderData, Link } from "remix";
import { textChangeRangeIsUnchanged } from "typescript";
import { db } from '~/utils/db.server'

export const loader = async () => {
  const data = {
    archive: await db.archive.findMany({
        take: 10,
        select: {id: true, day: true, month: true, year: true, venue: true, city: true, state: true  }
    })
  };
  return data;
};

/*
model archive {
  id   String  @id @default(uuid())
  month String
  day String
  year Int
  venue String
  city String
  state String
  setlist String
}
*/

function Archive() {
  const {archive} = useLoaderData();

  return (
    <>
      <div className="page-header">
        <h1>Archive</h1>
      </div>

      <ul className="post-list">
        {archive.map((archiveDate) => (
          <li key={archiveDate.id}>
            <Link to={archiveDate.id}>
              <h4>{archiveDate.month} {archiveDate.day} {archiveDate.year}</h4>
              <h5>{archiveDate.venue} {archiveDate.city}, {archiveDate.state}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Archive;