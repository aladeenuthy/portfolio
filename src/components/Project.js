function Project({projectName, projectDescription,imageLength, folderName, extension}) {
    const images = Array.from({length:imageLength}).map((_, index)=>{
        return <div><img src={require(`../images/${folderName}/${index+1}.${extension}`)} alt='' /></div>
    })
  return (
    <div className="project" data-aos="fade-up">
    <h1 className="mb-4">{projectName}</h1>
    <h4 className="mb-4">
    {projectDescription}
    </h4>
    <div className="project-image-container">
        {images}
    </div>
</div>
  );
}

export default Project;
