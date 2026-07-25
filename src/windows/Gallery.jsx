import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import { gallery } from "@constants";

const Gallery = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  const openImage = (item) => {
    openWindow("imgfile", {
      imageUrl: item.img,
    });
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "0.75rem",
    padding: "0.75rem",
    width: "100%",
    minHeight: "calc(100% - 3rem)",
    boxSizing: "border-box",
  };

  const itemStyle = {
    width: "100%",
    aspectRatio: "1 / 1",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    borderRadius: "0.75rem",
    overflow: "hidden",
    padding: 0,
    background: "#fff",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>
      <div style={gridStyle}>
        {gallery.map((item) => (
          <button
            key={item.id}
            type="button"
            style={itemStyle}
            onClick={() => openImage(item)}
          >
            <img src={item.img} alt={`Gallery image ${item.id}`} style={imageStyle} />
          </button>
        ))}
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
