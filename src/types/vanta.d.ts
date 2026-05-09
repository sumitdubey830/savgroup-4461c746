declare module "vanta/dist/vanta.net.min" {
  type VantaInstance = {
    destroy: () => void;
  };

  type VantaOptions = {
    el: HTMLElement;
    THREE: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  };

  const NET: (options: VantaOptions) => VantaInstance;
  export default NET;
}
