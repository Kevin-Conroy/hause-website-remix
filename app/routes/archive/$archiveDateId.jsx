import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const archivedate = await db.archive.findUnique({
    where: { id: params.archiveDateId },
  });
  if (!archivedate) throw new Error("Date not found");
  const data = { archivedate };
  return data;
};
function ArchiveDate() {
  const { archivedate } = useLoaderData();

  return (
    <>
      <div>
        <h2>{archivedate.venue}</h2>
      </div>
      <div className="box">
        <p>{archivedate.setlist}</p>
      </div>
    </>
  );
}

export default ArchiveDate;

/*

<h4>{archivedate.month} {archivedate.day} {archivedate.year}</h4>
        <h5>{archivedate.city}, {archivedate.state}</h5>
        */
