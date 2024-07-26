import { laptops } from "./src/js/db.js";
import { renderGoods } from "./src/js/renderGoods.js";
import { renderSelect } from "./src/js/renderSelct.js";

document.addEventListener("DOMContentLoaded", () => {
  renderGoods(laptops);
  const uniqueProcessors = new Set();
  const uniqueRam = new Set();
  const uniqueStorage = new Set();
  const uniqueDisplay = new Set();
  const uniqueGraphics = new Set();
  laptops.forEach((data) => {
    const {
      specs: { processor, ram, storage, display, graphics },
    } = data;
    uniqueProcessors.add(processor);
    uniqueRam.add(ram);
    uniqueStorage.add(storage);
    uniqueDisplay.add(display);
    uniqueGraphics.add(graphics);
  });
  renderSelect(
    document.getElementById("processorFilter"),
    Array.from(uniqueProcessors)
  );
  renderSelect(document.getElementById("ramFilter"), Array.from(uniqueRam));
  renderSelect(
    document.getElementById("storageFilter"),
    Array.from(uniqueStorage)
  );
  renderSelect(
    document.getElementById("displayFilter"),
    Array.from(uniqueDisplay)
  );
  renderSelect(
    document.getElementById("graphicsFilter"),
    Array.from(uniqueGraphics)
  );
});
