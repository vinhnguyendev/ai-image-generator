export function SectionDevider ({title, subtitle}) {
    return (
    <div className="container w-75 my-5">
        <h2>{title}</h2>
        {subtitle?(
        <h3></h3>
        ) : null
        }
    </div>
    )
}