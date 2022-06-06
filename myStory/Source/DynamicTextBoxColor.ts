namespace myStory {
  export function changeColorTextbox() {
    let element = Array.from(
      document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
    )[0];
    const rgb = getAverageRGB();
    element.style.backgroundColor =
      "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + 0.9 + ")";
    changeColorOfName(rgb.r, rgb.g, rgb.b);
    changeColorOfContent(rgb.r, rgb.g, rgb.b);
  }
}

function changeColorOfContent(r: number, g: number, b: number) {
  let element = Array.from(
    document.getElementsByTagName("content") as HTMLCollectionOf<HTMLElement>
  )[0];

  const hsv = RGBtoHSV(r, g, b);
  hsv.v = 1;
  if (hsv.h * 2 > 1) {
    hsv.h *= 0.5;
  } else {
    hsv.h *= 2;
  }
  const rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
  element.style.color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

function changeColorOfName(r: number, g: number, b: number) {
  let element = Array.from(
    document.getElementsByTagName("name") as HTMLCollectionOf<HTMLElement>
  )[0];

  const hsv = RGBtoHSV(r, g, b);
  hsv.v = 1;

  const rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
  element.style.color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

function getAverageRGB() {
  const imgEl: HTMLCanvasElement = Array.from(
    document.getElementsByTagName(
      "canvas"
    ) as HTMLCollectionOf<HTMLCanvasElement>
  )[0];

  const blockSize: number = 5; // only visit every 5 pixels
  let defaultRGB = { r: 0, g: 0, b: 0 };
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const context: CanvasRenderingContext2D =
    canvas.getContext && canvas.getContext("2d");
  let data: ImageData;
  let width: number;
  let height: number;
  let i: number = -4;
  let length: number;
  let rgb = { r: 0, g: 0, b: 0 };
  let count: number = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height = imgEl.offsetHeight;
  width = canvas.width = imgEl.offsetWidth;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    alert("x");
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

function RGBtoHSV(r: number, g: number, b: number) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h: number;
  const s = max === 0 ? 0 : d / max;
  const v = max / 255;

  switch (max) {
    case min:
      h = 0;
      break;
    case r:
      h = g - b + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;
    case g:
      h = b - r + d * 2;
      h /= 6 * d;
      break;
    case b:
      h = r - g + d * 4;
      h /= 6 * d;
      break;
  }

  return {
    h: h,
    s: s,
    v: v,
  };
}

function HSVtoRGB(h: number, s: number, v: number) {
  let r, g, b, i, f, p, q, t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}
