export default async function VideoComponent() {
    const src = await getVideoSrc()
   
    return <iframe src={src} frameborder="0" allowfullscreen />
  }

function getVideoSrc() {
    throw new Error("Function not implemented.")
}
