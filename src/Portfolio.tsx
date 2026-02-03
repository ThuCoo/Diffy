import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Portfolio() {
  // Dynamically import all images from the img folder and subfolders
  const imageModules = import.meta.glob("./img/**/*.{png,jpg,jpeg,gif,svg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  // Group images by folder
  const imagesByFolder: Record<
    string,
    Array<{ path: string; url: string; name: string }>
  > = {};

  Object.entries(imageModules).forEach(([path, url]) => {
    const pathParts = path.split("/");
    // Get folder name or "Main" for root images
    const folderName = pathParts.length > 3 ? pathParts[2] : "Main";
    const fileName = pathParts[pathParts.length - 1];

    if (!imagesByFolder[folderName]) {
      imagesByFolder[folderName] = [];
    }

    imagesByFolder[folderName].push({
      path,
      url,
      name: fileName,
    });
  });

  return (
    <div className="w-full flex flex-col gap-12">
      <h2 className="text-2xl text-amber-100 text-center">Portfolio</h2>
      {Object.entries(imagesByFolder).map(([folderName, images]) => (
        <div key={folderName} className="flex flex-col gap-4">
          <h3 className="text-xl text-amber-200 text-center capitalize">
            {folderName}
          </h3>
          <Carousel
            className="w-full max-w-5xl mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.path} className="basis md:basis-1/3">
                  <div className="flex items-center justify-center h-96">
                    <img
                      src={image.url}
                      alt={image.name}
                      loading="lazy"
                      className="max-h-full w-auto rounded-lg object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </div>
  );
}
