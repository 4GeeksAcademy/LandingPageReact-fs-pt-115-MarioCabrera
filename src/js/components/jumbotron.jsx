export const Jumbotron = ({ data }) => {
    const { title, button1 , button2, description, darkmode, changeMode , changeImg} = data;
    return (
        <div className={`p-3 m-4 bg-body-tertiary rounded-3 ${(darkmode) ? "bg-dark text-white" : "bg-white text-dark"}`} data-bs-theme={(darkmode) ? "dark" : "light"}>
            <div className="container-fluid py-5">
                <h1 className="display-2 fw-bold">{title}</h1>
                <p className="col-md-8 fs-4">{description}</p>
                <button className={`btn btn-lg me-2 ${(!darkmode)?"btn-success":"btn-danger"}`} type="button" onClick={changeMode}>{button1}</button>
                <button className={`btn btn-lg ms-2 ${(!darkmode)?"btn-success":"btn-danger"}`} type="button" onClick={changeImg}>{button2}</button>
            </div>
        </div>
    )
}