import { ImageSlider } from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("Server Route Rendered");

  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider/>
    </>
  );
}
