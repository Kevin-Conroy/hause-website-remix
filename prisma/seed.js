const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getNews().map((newsItem) => {
      return db.hausenews.create({ data: newsItem });
    })
  );
}

seed()

function getNews() {
  return [
    {
      title: "BLOOD HARMONY IS OUT OCTOBER 22ND!",
      body: `I am so thrilled to let you all know first that my fifth record, Blood Harmony, is finished. It is being pressed on vinyl and CD, is available digitally as well, and will be out in the world October 22nd.

            As I've mentioned, this record is our first on our own label. Tim and I get to call all the shots so if we want to leak the news a day early, we can. I have so many more updates so let's get to it. 
            
            First, we have a brand new store that you can go to HERE. It lets our American fans pay with dollars, our European fans pay with euros, and everybody gets their merchandise shipped from their own continent. If you're in North or South America, Tim will be personally sending it your way straight from Philly. If you're in Europe, Asia, or Australia our dear friend Susan who runs the fantastic RANKERS page will be shipping it. Now that we're our own label, we get to keep everything in the family, and that includes you. 
            
            The fun starts on Friday when the first single, "Sandy Sheets", is out in the world. You can pre-save it HERE. Now that we're the label, we have to ask people to do that. Please forgive us.
            
            Over the next weeks and months, I am so stoked to tell you all about the making of the record, introduce you to the amazing people who played it with me, but most of all, share this music with you as we are so proud of it.`,
    },
    {
      title: "EUROPEAN TOUR POSTPONED",
      body: `Unfortunately we had to move our tour to September.`
    }
  ];
}
