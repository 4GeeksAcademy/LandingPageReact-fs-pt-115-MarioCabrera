export const Cards = ({data}) => {
    const {  title, text, button, randImg, darkmode, index, changeOneImg } = data;
    return (
        <div className="col">
            <div className={`card ${(darkmode) ? "bg-dark text-white":"bg-light text-dark"}`} data-bs-theme={(darkmode)? "dark":"light"} >
                <img src={randImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text overflow-auto" style={{ maxHeight: "100px", minHeight: "100px" }}>{text}</p>
                </div>
                <div className="card-footer">
                    <button href="" className={`btn ${(!darkmode)?"btn-success":"btn-danger"}`} onClick={() => changeOneImg(index)}>{button}</button>
                </div>
            </div>
        </div>
    )
}