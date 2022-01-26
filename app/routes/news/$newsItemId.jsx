import { useParams} from "remix";

function NewsItem() {
    const params = useParams()
    return (
        <div>
            <h1>News Item {params.postId}</h1>
        </div>
    )
}

export default NewsItem