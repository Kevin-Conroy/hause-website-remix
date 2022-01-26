import { useLoaderData } from "remix";
import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
    const newsitem = await db.hausenews.findUnique({
        where: { id: params.newsItemId }
    })
    if(!newsitem) throw new Error('Article not found')
    const data = {newsitem}
    return data
}
function NewsItem() {
    const { newsitem } = useLoaderData()
  
    return (
        <>
        <div>
            <h2>{newsitem.title}</h2>
        </div>
        <div className="box">
            <p>{newsitem.body}</p>
        </div>
        </>
    )
}

export default NewsItem