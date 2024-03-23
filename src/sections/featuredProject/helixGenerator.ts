const addSprialToLine = (line: string, frame: number) => {
  const sin = Math.sin(frame),
    x = Math.round(sin * 10 + 10),
    char = Math.abs(sin) > 0.85 ? "*" : Math.cos(frame) > 0 ? "-" : "@"
  return line.slice(0, x) + char + line.slice(x + 1)
}

export const generateHelixLine = (frame: number) => {
  const line = addSprialToLine(" ".repeat(22), (frame + 15) * 0.2)
  return addSprialToLine(line, frame * 0.21)
}
