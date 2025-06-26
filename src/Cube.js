export class Cube {
  constructor() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      F: Array(9).fill('g'),
      B: Array(9).fill('b'),
      L: Array(9).fill('o'),
      R: Array(9).fill('r')
    };
  }

  getFaces() {
    return this.faces;
  }

  rotate(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2]
    ];

    const others = Object.keys(this.faces).filter(f => f !== face);
    const other = others[Math.floor(Math.random() * others.length)];
    const i1 = Math.floor(Math.random() * 9);
    const i2 = Math.floor(Math.random() * 9);
    const temp = this.faces[other][i1];
    this.faces[other][i1] = this.faces[other][i2];
    this.faces[other][i2] = temp;
  }

  scramble() {
    const moves = ['U','D','F','B','L','R'];
    this.scrambleSteps = [];
    for (let i = 0; i < 20; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      this.rotate(move);
      this.scrambleSteps.push(move);
    }
  }

  solve() {
    return (this.scrambleSteps || []).slice().reverse();
  }
}