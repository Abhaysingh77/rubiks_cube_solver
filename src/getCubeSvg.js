export function getCubeSvg(faces) {
  const colorMap = { w: "#FFFFFF", y: "#FFFF00", r: "#FF0000", o: "#FFA500", g: "#00FF00", b: "#0000FF" };
  const size = 30;
  let svg = '<svg width="420" height="300">';

  const positions = {
    U: [size * 3, 0],
    L: [0, size * 3],
    F: [size * 3, size * 3],
    R: [size * 6, size * 3],
    B: [size * 9, size * 3],
    D: [size * 3, size * 6]
  };

  for (const [face, [xOffset, yOffset]] of Object.entries(positions)) {
    faces[face].forEach((color, i) => {
      const x = xOffset + (i % 3) * size;
      const y = yOffset + Math.floor(i / 3) * size;
      svg += `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${colorMap[color]}" stroke="#000"/>`;
    });
  }

  svg += '</svg>';
  return svg;
}