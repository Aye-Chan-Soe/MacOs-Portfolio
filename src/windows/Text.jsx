import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Text = () => {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  const { name, image, subtitle, description = [] } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <article className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-gray-700">
        {image && <img src={image} alt="" className="w-full rounded-lg" />}
        {subtitle && <h3 className="text-lg font-semibold text-gray-900">{subtitle}</h3>}
        {description.map((paragraph, index) => (
          <p key={`${name}-${index}`}>{paragraph}</p>
        ))}
      </article>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
