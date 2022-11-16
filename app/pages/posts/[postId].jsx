import { useRouter } from 'next/router'
import db from "../../data/db"

export default function PostPage() {
    const router = useRouter()
    const { postId } = router.query

    //console.log(db.filter(v => v.id == postId))
    //console.log(db)

    //console.log( db.map(v =>( {params: {postId: v.id.toString}}  ))   )

    return (
        <>
            <h1>HELLO</h1>
        </>
    )
}

