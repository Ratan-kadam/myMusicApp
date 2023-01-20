import { useParams, useNavigate } from "react-router-dom";

export default function Watch() {
    const { id } = useParams();
    return (
        <div>
                <iframe
                    width="800"
                    height="500"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
        </div>
    )
}