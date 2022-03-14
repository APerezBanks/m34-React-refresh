export const PhotoContainer = ({ photo }) => {
    return (
        <>
        <p>{photo.author}</p>
        <img src={photo.download_url} alt="lorem pcisum random "/>
        </>
    )
};