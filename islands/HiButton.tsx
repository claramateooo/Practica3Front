import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const HiButton: FunctionComponent<
  {
    children?: any;
    SayHi: Signal<string>;
    nombre: Signal<string>;
    apellido: Signal<string>;
  }
> = ({ children, SayHi, nombre, apellido },) => {
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      onClick={(e) => {
        e.preventDefault();
        SayHi.value = `${nombre.value} ${apellido.value}`;
        if (audio && audio.paused) {
          audio.play();
        } else if (audio) {
          audio.pause();
        }
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;